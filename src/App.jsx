import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notificaion from './components/Notification'
import Fliter from './components/Filter'

const App = () => {

  return (
    <div>
      <Notificaion />
      <Fliter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
