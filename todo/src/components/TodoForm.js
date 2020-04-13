import React from 'react';

function TodoForm =() =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const addTodo
