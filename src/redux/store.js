import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});
