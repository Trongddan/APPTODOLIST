const initialState=[
        {id:1, name :"learn Redux",completed:true, prioriry:'Medium'},
        {id:2, name :"learn React",completed:false, prioriry:'Low'}
]
const todoListReducer =(state=initialState, action)=>{

    switch(action.type){
        case 'todoList/addTodo':
            return [...state,action.payload]
        case 'tolist/changeStatus':
            return state.map((todo)=>{
                if (todo.id ===action.payload){
                  return  {...todo,completed: !todo.completed}
                }else{
                    return  {...todo}
                } 
            })
        default:return state  

    }
}
export default todoListReducer