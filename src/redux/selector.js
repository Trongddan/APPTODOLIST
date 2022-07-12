import { createSelector } from "reselect";
export const useSelectorTodolist = (state) => state.todoList;

export const searchFilterChange = (state) => state.filters.search;

export const searhStatusChange =(state)=>state.filters.status;

export const searchPrioriryChange=(state)=>state.filters.prioriry;

export const todoRemainingSelector = createSelector(
  useSelectorTodolist,
  searhStatusChange,
  searchPrioriryChange,
  searchFilterChange,
  (todolist,status,prioriry,searhtext) => {
      return todolist.filter((todo)=>{
          if(status==="All"){
         return  prioriry.length >0 ? todo.name.includes(searhtext) && prioriry.includes(todo.prioriry):todo.name.includes(searhtext)
          }else
          {
            return prioriry.length>0?todo.name.includes(searhtext)&& prioriry.includes(todo.prioriry)&&(status ==='Completed'?todo.completed :!todo.completed) :todo.name.includes(searhtext)&&(status ==='Completed'?todo.completed :!todo.completed)
          }
      })
  }
);
