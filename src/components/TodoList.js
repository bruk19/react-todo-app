import React, { useContext } from 'react'
import { TodoContext } from '../context/TodContext'
import TodoItem from './TodoItem'

function TodoList() {
  const {todos} = useContext(TodoContext);

  return (
    <div className='todo-list'>
      {todos.map(todo => {
        return (
        <TodoItem todo={todo} key={todo.id} />
        )
      })}
      
    </div>
  )
}

export default TodoList;