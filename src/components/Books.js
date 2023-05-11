/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/bookSlice';

const CreateBook = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const deleteHandleClick = (bookId) => {
    dispatch(deleteBooks(bookId));
  };

  return (
    <div className="books_wrapper">
      <div className="books">
        <p>{title}</p>
        <p>{author}</p>
      </div>
      {title && (
      <div className="buttons">
        <button type="button">Comments</button>
        <button type="button" onClick={() => deleteHandleClick(id)}>
          Remove
        </button>
      </div>
      )}
    </div>
  );
};

export default CreateBook;
