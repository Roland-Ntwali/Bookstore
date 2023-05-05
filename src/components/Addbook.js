import React from 'react';
import './Addbook.css';

const Addbook = () => (
  <div className="new_book">
    <form>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Addbook;
