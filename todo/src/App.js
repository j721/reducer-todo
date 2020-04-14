import React,{useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {initialState, reducer} from './reducers/reducer';
import './components/Todo.css'
import './App.css';


function App() {
  //declare state and dispactch with useReducer()
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  //using dispatch to manipulate state in reducer functions
  const addTodo =(input) =>{
    const newTodo ={
      todo: input,
      completed: false,
      id: Date.now()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleChange =(id)=>{
    dispatch({type: "COMPLETED_TODO", payload: id})
  }
 
  const clearCompleted =() =>{
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo ={addTodo} />
        <TodoList state ={state} handleChange ={handleChange} />
          <button className ="clear-button" onClick ={(event)=>{
            event.preventDefault();
            clearCompleted();
          }}
          >Clear Button</button>
    </div>
  );
}

export default App;
