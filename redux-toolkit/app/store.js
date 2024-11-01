// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
