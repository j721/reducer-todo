import React from 'react';

const TodoForm = ({dispatch})=>{
    const [item, setItem] = useState("");

    const handleChanges = e =>{
        setItem(e.target.value);
    }

    const submitItem=e =>{
        e.preventDefault();
        dispatch({type: "ADD_TODO",payload: item});
        setItem("");
    }
}
