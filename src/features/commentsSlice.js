import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    editComment: (state, action) => {
      const { id, text } = action.payload;
      const comment = state.comments.find((comment) => comment.id === id);
      if (comment) comment.text = text;
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
    toggleVote: (state, action) => {
      const { id, type } = action.payload; 
      const comment = state.comments.find((comment) => comment.id === id);
      if (comment) {
        if (type === 'like') comment.likes++;
        if (type === 'dislike') comment.dislikes++;
      }
    },
  },
});

export const { addComment, editComment, deleteComment, toggleVote } = commentsSlice.actions;
export default commentsSlice.reducer;
