import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <Link className="BooksH" to="/">Books</Link>
    <Link className="CategoriesH" to="/categories">Categories</Link>
  </div>
);

export default Header;
