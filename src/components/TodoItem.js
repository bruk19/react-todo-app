import React from 'react'
import { FaTrash } from "react-icons/fa";
function TodoItem() {
  return (
    <div className='todo-item'>
        <p className='tod-item-text'></p>
        <FaTrash size='1.1rem' color='blue'/>
    </div>
  )
}

export default TodoItem