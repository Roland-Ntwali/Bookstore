import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = '0POBCeDJRoHwZc2T3ceJ';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;
const initialState = {
  books: [],
};

export const getBooks = createAsyncThunk('book/getbooks', async () => {
  const response = await axios.get(baseUrl);
  const { data } = response;
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return { books };
});

export const postBooks = createAsyncThunk('book/postbooks', async (book) => {
  await axios.post(baseUrl, book);
  return book;
});

export const deleteBooks = createAsyncThunk('book/delete', async (bookId) => {
  await axios.delete(`${baseUrl}/${bookId})`);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload.id),
    }),

  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      books: action.payload.books,
    })).addCase(postBooks.fulfilled, (state, action) => ({
      ...state,
      books: state.books.concat(action.payload),
    })).addCase(deleteBooks.fulfilled, (state, action) => {
      const id = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== id),
      };
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
