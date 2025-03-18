import { createSlice } from "@reduxjs/toolkit";

const initialState = ''
const notificationSlice = createSlice({
  name:'notification',
  initialState,
  reducers:{
    setNotification(state, action) {
      return action.payload
    },
    cleanNotification() {
      return ''
    }
  }
})

export const {setNotification, cleanNotification } = notificationSlice.actions
export default notificationSlice.reducer