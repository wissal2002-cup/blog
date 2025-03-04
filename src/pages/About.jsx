import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/');
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <section className="about-section">
        <h2>Hello, I'm Sarah!</h2>
        <p>Welcome to my blog! I’m passionate about sharing my journey and knowledge on wellness, yoga, and mindful living.</p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>At *Mindful Living*, we aim to inspire and support individuals in their wellness journeys with simple, practical tips and insights on health, yoga, and self-care.</p>
      </section>

      <section className="about-section">
        <h2>What You Can Expect</h2>
        <p>Here, you'll find articles on yoga, wellness practices, and ways to incorporate mindfulness into your daily life. My goal is to make wellness accessible and actionable for everyone.</p>
      </section>

      <section className="about-section">
        <h2>Get Involved</h2>
        <p>I encourage you to reach out, share your thoughts, or subscribe for weekly tips on living a balanced life.</p>
        <button className="cta-button">Subscribe</button>
      </section>

      <button className="go-home-button" onClick={goBackHome}>Go Back to Home</button>
    </div>
  );
};

export default About;
