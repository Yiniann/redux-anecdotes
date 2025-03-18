import { useSelector, useDispatch } from "react-redux";
import { vote } from "../slices/anecdoteSlice";
import { setNotification,cleanNotification } from "../slices/notificationSlice";
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const handleVote = (id) => {
    dispatch(vote(id))
    dispatch(setNotification('Voting successful'))
    setTimeout(()=> {
      dispatch(cleanNotification())
    },
    5000)
  };

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
