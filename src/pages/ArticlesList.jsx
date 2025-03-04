import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../index.css';

export const articles = [
  {
    id: 1,
    title: 'The Benefits of Daily Yoga Practice',
    content: `Yoga offers numerous benefits for both the body and mind. It improves flexibility, posture, and reduces stress, transforming your physical and emotional well-being. Regular practice increases strength, energy, and mental clarity, while fostering emotional balance and self-awareness.

Through consistent practice, yoga stretches muscles and improves joint mobility, leading to better flexibility and reduced stiffness. It also enhances posture, helping prevent chronic pain, especially in the back and neck.

Yoga builds strength by engaging muscle groups often underworked in other exercises. This improves overall body support, balance, and functional fitness, making daily tasks easier.

Yoga also promotes mental well-being by reducing stress and anxiety. The focus on breathwork and mindfulness encourages relaxation and helps lower cortisol levels, calming the mind.

In addition to calming the mind, yoga increases energy by boosting circulation and oxygen delivery to muscles and organs. It also sharpens focus, enhancing cognitive function and productivity in daily life.

Yoga nurtures self-awareness, helping you tune into your body’s needs and fostering emotional balance. Over time, it helps develop patience, compassion, and mindfulness.

With its many physical, mental, and emotional benefits, daily yoga practice can greatly improve your overall health and well-being.`,
    author: 'John Doe',
    date: 'March 1, 2025',
    tags: ['Health', 'Wellness'],
    image: "yoga.jpg"
  },
  {
    id: 2,
    title: 'How to Stay Productive While Working from Home',
    content: `Working from home offers flexibility, but it can also lead to distractions and decreased productivity. Here are some tips to help you stay focused and efficient:

Set a Routine
Establishing a regular work schedule helps maintain structure. Set clear working hours and stick to them, just as you would in a traditional office environment.

Create a Dedicated Workspace
Having a specific area for work can minimize distractions. Ensure your workspace is comfortable and free of personal distractions like TV or bed.

Dress for Success
Dressing in work attire, even if casual, signals to your brain that it’s time to focus. Avoid staying in pajamas, as it can negatively affect your mindset.

Break Down Tasks
Instead of tackling large projects all at once, break them down into smaller, manageable tasks. This helps maintain focus and provides a sense of accomplishment as you complete each task.

Limit Distractions
Turn off non-work-related notifications and set boundaries with family or roommates. Consider using apps that block distracting websites during work hours.

Take Regular Breaks
Schedule breaks throughout the day to recharge. Step away from your workspace, stretch, or go for a walk to clear your mind and avoid burnout.

Use Productivity Tools
Leverage tools like to-do lists, calendars, or project management software to keep track of your tasks and deadlines.

Stay Connected with Your Team
Maintain communication with colleagues through video calls, chat, or emails to stay engaged and collaborate effectively.

Set Clear Goals
Having specific daily, weekly, and long-term goals helps you stay on track and motivated. Review your goals regularly to stay focused on what matters.

End Your Day with a Routine
Just as you begin your day with a routine, establish an end-of-day ritual to mark the conclusion of your work hours. This helps separate work from personal life.

By staying organized, minimizing distractions, and taking care of yourself, you can stay productive and maintain a healthy work-life balance while working from home.`,
    author: 'Jane Smith',
    date: 'February 25, 2025',
    tags: ['Productivity', 'Work'],
    image:"work.jpg",
  },
];

const ArticlesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedArticles = [...filteredArticles].sort((a, b) =>
    sortOrder === 'newest' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
  );

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>Liste des articles</h1>
        <div className='search-container'>
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="newest">Plus récent</option>
          <option value="oldest">Plus ancien</option>
        </select>
        </div>

        <div className="articles-list">
          {sortedArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={`/images/${article.image}`}alt={article.title} className='article-image'/>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
              <p><strong>Auteur:</strong> {article.author}</p>
              <p><strong>Date:</strong> {article.date}</p>
              <p><strong>Tags:</strong> {article.tags.join(', ')}</p>
              <button>❤️ Sauvegarder</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
