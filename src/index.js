import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import TodoContainer from "./components/TodoContainer"

const element = <h1>Hello from Create React App</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<TodoContainer />, document.getElementById("root"))
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);

