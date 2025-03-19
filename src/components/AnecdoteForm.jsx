import { useDispatch } from "react-redux";
import { createAnecdote } from "../slices/anecdoteSlice";
import { showNotification } from "../slices/notificationSlice";


const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreate = async(event) => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    if (content) {
      event.target.reset()
      dispatch(createAnecdote(content))
      dispatch(showNotification(`New anecdote '${content}' created`, 5))
    }
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
