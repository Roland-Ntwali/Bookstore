import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/bookSlice';
import '../styles.css';
import Books from './Books';

const Addbook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      // If either the title or author is empty, do not dispatch the action
      return;
    }
    dispatch(postBooks({
      item_id: nanoid(),
      title,
      author,
      category: null,
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <Books />
      <div className="new_book">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="add_button" type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default Addbook;
