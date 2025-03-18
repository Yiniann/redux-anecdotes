import { configureStore } from "@reduxjs/toolkit";
import anecdoteSlice from "./slices/anecdoteSlice"
import notificationSlice from './slices/notificationSlice'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteSlice,
    notification : notificationSlice
  },
});

export default store;
