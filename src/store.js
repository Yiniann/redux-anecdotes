import { configureStore } from "@reduxjs/toolkit";
import anecdoteSlice from "./slices/anecdoteSlice"
import notificationSlice from './slices/notificationSlice'
import filterSlice from './slices/filterSlice'


const store = configureStore({
  reducer: {
    anecdotes: anecdoteSlice,
    notification : notificationSlice,
    filter : filterSlice
  },
})


export default store;
