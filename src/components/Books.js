import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { title, author } = props;
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
      </ul>
      <button type="button">Remove</button>
    </div>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
