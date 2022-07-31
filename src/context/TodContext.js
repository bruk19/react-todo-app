import { createContext, useState } from "react";

export const TodoContext = createContext();

function saveLocalTodos(todo) {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteLocalTodos(id) {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todos.findIndex(todo => todo.id ===id);
    todos.splice(todoIndex, 1);
    localStorage.setItem('tods', JSON.stringify(todos));
}

function getInitialTodos() {
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
}

export const TodoProvider = ({children}) => {
    
    const [todos, setTodos] = useState(getInitialTodos);

    function addTodo(text) {
      const todo = {
        id: Math.floor(Math.random() * 1000).toString(),
        text: text,
      }
      setTodos(prevTodo => [...prevTodo, todos]);
      saveLocalTodos(todo);
    }

    function deleteTodo(id) {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
        deleteLocalTodos(id);
    }

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo
        }}>
           {children}
        </TodoContext.Provider>

    )
}