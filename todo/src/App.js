import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {initialState, reducer} from './reducers/reducer';
import './App.css';

function App() {
  //declare stae and disipatch with reducer 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
    </div>
  );
}

export default App;
