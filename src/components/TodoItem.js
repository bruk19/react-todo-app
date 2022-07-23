import React from 'react'
import { FaTrash } from "react-icons/fa";
function TodoItem() {
  return (
    <div className='todo-item'>
        <p className='tod-item-text'>hy</p>
        <FaTrash size='1.5rem' color='blue' cursor='pointer'/>
    </div>
  )
}

export default TodoItem