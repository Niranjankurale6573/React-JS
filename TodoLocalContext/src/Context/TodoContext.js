import { createContext,useContext } from "react";

export const TodoContext=createContext({
        todos:[

            //Sample formate of todo content
            {
                id:1,
                todo:'Todo msg',
                completed:false,

            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{},

})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider