import React from 'react';


const Todo = props =>{
    console.log("Todo", props);
    return(
        <div className ="Todo">
            <h2 className ={props.item.completed ? 'completed':''}
            onClick ={(event)=>{
                event.preventDefault()
                props.handleComplete(props.item.id)
            }}
            >{props.item.todo}</h2>
        </div>
    )
}

export default Todo; 