import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { ToDoList } from './ToDoList';

function App() {
  return (
    < div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <ToDoList />
    </div>
  );
}

export default App;
