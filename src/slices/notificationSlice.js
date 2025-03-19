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
//使用thunk actions 接收一个函数作为action 
export const showNotification = (message, seconds) => {
  return (dispatch) => {
    dispatch(setNotification(message))

    setTimeout(()=>{
      dispatch(cleanNotification())
    }, seconds * 1000)
  }
}
export default notificationSlice.reducer