import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {initialState, reducer} from './reducers/reducer';
import './App.css';

function App() {
  //declare stae and disipatch with reducer 
  return (
    <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo ={addTodo} />
        <TodoList state ={state} handleComplete ={handleComplete} 
        <button onClick ={(e)=>{
          e.preventDefault(); 
          clearCompleted();
          />Clear</button>
        }}
    </div>
  );
}

export default App;
