import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

//anecdote约束器
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers: {
    setAnecdotes(state, action){
      return action.payload
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      const updatedAnecdote = action.payload
      return state.map(a => a.id === updatedAnecdote.id ? updatedAnecdote : a)
      }
    }
})
export const { addAnecdote, voteAnecdote, setAnecdotes} = anecdoteSlice.actions

//通过thunk处理异步请求

export const initializeAnecdote = ()=> {
  return async dispatch =>{
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content =>{
  return async dispatch=>{
    const newAnecdote = await anecdoteService.create(content)
    dispatch(addAnecdote(newAnecdote))
  }
}
export const voteAnecdoteAsync = (id) => async (dispatch, getState) => {
  const anecdote = getState().anecdotes.find(a => a.id === id)
  if (anecdote) {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    const returnedAnecdote = await anecdoteService.vote(updatedAnecdote)
    dispatch(voteAnecdote(returnedAnecdote))
  }
}


export default anecdoteSlice.reducer
