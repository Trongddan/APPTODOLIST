import filterReducer from "../components/Filters/FilterSlice"
import todoListReducer from "../components/TodoList/todoSlice"
import {combineReducers} from 'redux'

// const rootReducer =(state=[], action)=>{
//     return{
//         filters: filterReducer(state.filters,action),
//         todoList:todoListReducer(state.todoList,action)
//     }
// }
const rootReducer = combineReducers({
    todoList:todoListReducer,
    filters:filterReducer,
    
})
export default rootReducer