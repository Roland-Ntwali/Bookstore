import React from 'react';
import { useSelector } from 'react-redux';
import Addbook from './Addbook';
import CreateBook from './Books';

const Booklist = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <CreateBook
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
      ))}
      <Addbook />
    </div>
  );
};

export default Booklist;
