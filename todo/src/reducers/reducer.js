//Initialize state for todo items
export const initialState =[{
    todo:'Learn about reducers',
    completed: false,
    id: Date.now()
}];
//reducer function- updates and manipulates state
export function reducer (state, action) {
    //switch statement. simplified if/else statement
    switch(action.type){
        case 'ADD_TODO':
            return[
                ...state,
              action.payload
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