/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { deleteBooks } from '../redux/books/bookSlice';
import progressBarLogic from './logic/books';
import '../styles.css';

const CreateBook = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const deleteHandleClick = (bookId) => {
    dispatch(deleteBooks(bookId));
  };
  const { progress, chapter } = progressBarLogic();
  return (

    <div className="books_main_container">
      {title && (
      <div className="books_container">
        <div className="books_wrapper">
          <h5>Action</h5>
          <div className="books">
            <h2>{title}</h2>
            <p>{author}</p>
          </div>
          <div className="buttons">
            <button type="button" className="button">comments</button>
            <button type="button" className="button" onClick={() => deleteHandleClick(id)}>
              remove
            </button>
            <button type="button" className="button">edit</button>
          </div>
        </div>

        <div className="progress_container">
          <div className="score_wrapper">
            <div className="progress_bar">
              <Progress
                type="circle"
                width={80}
                format={() => ''}
                strokeWidth={10}
                strokeColor={{
                  '0%': '#307bbe',
                  '100%': '#379cf6',
                }}
                trailColor="#e8e8e8"
                percent={progress}
              />
              <div className="percent">
                <h2 id="percent">
                  {progress}
                  {' '}
                  %
                </h2>
                <p>Completed</p>
              </div>
            </div>
          </div>

          <div className="stats_wrapper">
            <div>
              <span />
            </div>
          </div>

          <div className="chapter_wrapper">
            <h2>CURRENT CHAPTER</h2>

            <p>
              Chapter
              {chapter}
              {' '}
            </p>

            <div className="chapter_button">
              <button type="button">Update Progress</button>
            </div>
          </div>
        </div>

      </div>
      )}
    </div>

  );
};

export default CreateBook;
