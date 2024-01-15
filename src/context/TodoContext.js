import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "learn redux",
            completed: false
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})
//custom hooks
//in the useContext we have passed the TodoContext
export const useTodo = () =>{
    return useContext(TodoContext) ;
}

//for directly using TodoProvider instead .Provider
export const TodoProvider = TodoContext.Provider

