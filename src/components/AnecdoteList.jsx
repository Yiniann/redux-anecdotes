import { useSelector, useDispatch } from "react-redux"
import { vote } from "../slices/anecdoteSlice"
import { setNotification, cleanNotification } from "../slices/notificationSlice"

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state)=> state.filter)
  const dispatch = useDispatch()

  
  const filteredAnecdotes = anecdotes
  .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => b.votes - a.votes)
  
  const handleVote = (id) => {
    dispatch(vote(id))
    dispatch(setNotification('Voting successful'))
    setTimeout(()=> {
      dispatch(cleanNotification())
    },
    5000)
  }

  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
