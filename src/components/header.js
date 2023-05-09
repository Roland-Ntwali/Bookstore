import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </div>
);

export default Header;
