/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const CreateBook = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="books_wrapper">
      <div className="books">
        <p>{title}</p>
        <p>{author}</p>
      </div>
      {title && (
      <div className="buttons">
        <button type="button">comments</button>
        <button type="button" onClick={handleRemoveClick}>
          remove
        </button>
      </div>
      )}
    </div>
  );
};

export default CreateBook;
