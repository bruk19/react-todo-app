import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa";
import { TodoContext } from '../context/TodContext';
function TodoItem({ todo = { id:'', text:''}}) {
  const {deleteTodo} = useContext(TodoContext);
  
  return (
    <div className='todo-item'>
        <p className='tod-item-text'>{todo.text}</p>
        <FaTrash onClick={() => deleteTodo(todo.id)} color='blue' cursor='pointer'/>
    </div>
  )
}

export default TodoItem