//Initialize state for todo items
export const initialState =[{
    todo:'Learn about reducers',
    completed: false,
    id: 3892987589
}];
//reducer function- updates and manipulates state
export function reducer (state, action) {
    //switch statement. simplified if/else statement
    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state,
                { item: action.payload, completed:false, id: Date.now() } 
            ]
        case "COMPLETED_TODO":
            return state.map((item)=>{
                return item.id ===action.payload?
                {...item, completed: !item.completed}:item
            })
        case "CLEAR_COMPLETED_TODO":
            return state.filter((item)=> !item.completed)
        default: 
            return state; 
    }

}