//Initialize state for todo items
export const intialState =[{
    todo:'',
    completed: false,
    id: 3892987589
}]

//reducer function- updates and manipulates state
export const reducer (state, action) =>{
    //switch statement. simplified if/else statement
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state, action.payload
            }
        case "COMPLETED_TODO":
            return state.map((item)=>{
                return item.id ===action.payload
            })
    }

}