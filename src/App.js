import TodoHeader from './components/TodoHeader'
import './App.css'
import TdoInput from './components/TdoInput'
import TodoList from './components/TodoList'
function App() {
  
  return (
    <main>
      <TodoHeader />
      <TdoInput />
      <TodoList />
    </main>
  )
}

export default App