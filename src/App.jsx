import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlesList from './pages/ArticlesList';
import CommentsPage from './pages/CommentsPages';
import About from './pages/About';


const App = () => {
 
  return(

   

     <Router>
    <Routes>
      <Route path="/" element={<ArticlesList />} />
      <Route path="/articles/:id" element={<CommentsPage />} />
      <Route path="/about" element={<About />} />

    </Routes>
  </Router>
  

  );
};

export default App;
