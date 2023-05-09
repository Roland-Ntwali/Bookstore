import React from 'react';
import Addbook from './Addbook';
import Books from './Books';

const Booklist = () => {
  const books = [
    {
      id: 1,
      title: 'First Book',
      author: 'Taflon',
    },
    {
      id: 2,
      title: 'Second Book',
      author: 'Taflon 2.0',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} />
      ))}
      <Addbook />
    </div>
  );
};

export default Booklist;
