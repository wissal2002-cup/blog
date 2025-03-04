import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">My Blog</h1>
      <ul  className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
          </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
          </li>
      </ul>
    </nav>
  );
};

export default NavBar;
