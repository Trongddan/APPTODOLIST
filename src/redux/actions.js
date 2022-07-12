export const addTodoAction =(data)=>{
   return{
       type:'todoList/addTodo',
       payload: data
   } 
}
export const searchFilterChange=(text)=>{
    return{
        type:'filter/search',
        payload: text
    }
}
export const searchStatusChange =(status)=>{
    return{
        type:'filter/searchStatus',
        payload:status
    }
}
export const searchProriryChange=(proriries)=>{
    return{
        type:'filter/searchProriry',
        payload:proriries
    }
}
export const changeStatus=(id)=>{
    return{
        type:'tolist/changeStatus',
        payload:id
    }
}