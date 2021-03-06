import React from 'react';
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div className="todo-list">
            {props.state.map((item)=>{
                return <Todo item ={item} key ={item.id} handleChange ={props.handleChange}/>
            })}
        </div>
    )
}

export default TodoList; 