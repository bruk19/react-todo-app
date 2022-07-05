import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import TodoContainer from '../components/TodoContainer';
import './styles/index.css';
import NotMatch from './pages/NotMatch';
import About from './pages/About';
import Navbar from './components/Navbar';
import SinglePage from '../pages/SinglePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="About" element={<About />}>
          <Route path=":abt" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
