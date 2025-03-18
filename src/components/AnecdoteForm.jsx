import { useDispatch } from "react-redux";
import { createAnecdote } from "../slices/anecdoteSlice";
import { cleanNotification, setNotification } from "../slices/notificationSlice";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    if (content) {
      dispatch(createAnecdote(content))
      event.target.reset()
      dispatch(setNotification(`${content} be created`))
      setTimeout(()=>{
        dispatch(cleanNotification())
      },5000)
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
