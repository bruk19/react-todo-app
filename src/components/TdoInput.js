import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodContext';


const TdoInput = () => {
  const {addTodo} = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoText === '') return;
    addTodo(todoText)
    setTodoText('');
  }
  return (
    <form className='todo-input' onSubmit={handleSubmit}>
        <input type='text' placeholder='create new tod' onChange={e => setTodoText(e.target.value)} value={todoText} />
    </form>
  )
}

export default TdoInput