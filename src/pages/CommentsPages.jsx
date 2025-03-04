import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, deleteComment, toggleVote,editComment } from '../features/commentsSlice';
import { useParams } from 'react-router-dom';
import { articles} from "./ArticlesList";
import  {useNavigate} from 'react-router-dom';

const CommentsPage = () => {

  const dispatch = useDispatch();

  const { id } = useParams(); // Récupère l'id de l'article dans l'URL
  
  const articleId = parseInt(id, 10); // Convertit en nombre

  const comments = useSelector((state) =>
    state.comments.comments.filter((comment) => comment.articleId === articleId)
  );

 

  const article = articles.find((article) => article.id === articleId);


  
  const [newComment, setNewComment] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);


  const handleAddComment = () => {
    dispatch(
      addComment({ id: Date.now(), text: newComment, likes: 0, dislikes: 0,articleId })
    );
    setNewComment('');
  };
  const handleEditComment = () => {
    if (editId) {
      dispatch(editComment({ id: editId, text: editText }));
      setEditText('');
      setEditId(null);
    }
  };

  const handleEditButtonClick = (comment) => {
    setEditId(comment.id);
    setEditText(comment.text);
  };


  
  

  const navigate=useNavigate();
  const handleBackHome = () =>{
    navigate('/');
  };
  const shareOnTwitter = (title, url) => {
    window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, "_blank");
  };
  
 
  return (

    <div className='comment-section'>
      {article ? (
        <>
        <div id="detailsarticle">
          
<h1 >{article.title}</h1>
<img src={`/images/${article.image}`} alt={article.title} className='article-image'/>
<p className="article-content">{article.content}</p>
</div>
        </>
      ) :(
        <p>Article Introuvable</p>
      )}

      <h2>Commentaires</h2>
      <input
        type="text"
        className="comment-input"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Ajouter un commentaire"
      />
      <button onClick={handleAddComment}>Ajouter</button>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            {editId === comment.id ? (
              <div>
                <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)}/>
                <button onClick={handleEditComment}>Modifier</button>
              </div>
            ):(
              <div>
            {comment.text} - Likes: {comment.likes} - Dislikes: {comment.dislikes}
            <div className='comment-actions'>
            <button onClick={() => dispatch(toggleVote({ id: comment.id, type: 'like' }))}>Like</button>
            <button onClick={() => dispatch(toggleVote({ id: comment.id, type: 'dislike' }))}>Dislike</button>
            <button onClick={() => dispatch(deleteComment(comment.id))}>Supprimer</button>
            <button onClick={()=>handleEditButtonClick(comment)}>Modifier</button>
            </div>
            </div>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => shareOnTwitter(article.title, window.location.href)}>
  🐦 Partager sur Twitter
</button>

      <div>
      <button onClick={handleBackHome}>Retour à l'Accueil</button>
    </div>
    </div>
  );
};

export default CommentsPage;
