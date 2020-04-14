import React,{useState} from 'react';

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
    const [form, setForm] = useState("");
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
                    setForm(event.target.value);
                }}
            /><button type ='submit'>Add Todo</button>
        </form>
    )
}

export default TodoForm;