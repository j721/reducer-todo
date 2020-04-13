import React from 'react';

// const TodoForm = ({dispatch})=>{
//     const [item, setItem] = useState("");

//     const handleChanges = e =>{
//         setItem(e.target.value);
//     }

//     const submitItem=e =>{
//         e.preventDefault();
//         dispatch({type: "ADD_TODO",payload: item});
//         setItem("");
//     }
// }

function TodoForm(props){
    const [item, setItem] = useState("");
    return(
        <form onSubmit ={(event)=>{
            event.preventDefault();
            props.addTodo(form);
            setForm('');
        }}>
            <input
                name ='todo'
                placeholder ='Add'
                value ={form}
                onChange ={(event)=>{
                    setItem(event.target.value);
                }}
            /><button type ='submit'>Add Todo</button>
        </form>
    )
}