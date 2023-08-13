import React from 'react'
import { useGetTodosQuery } from "../api/apiSlice"
import { useState } from 'react'

const TodoList = () => {

     const [newTodo, setNewTodo] = useState('');

     const { isError, isLoading, isSuccess, data: todos } = useGetTodosQuery();

     let content;
     if (isLoading) {
          content = <h3>Loading...</h3>
     } else if (isSuccess) {
          content = JSON.stringify(todos);
     } else if (isError) {
          content = <h3>Sorry There is an error</h3>
     }

     return (
          <div>
               {content}
          </div>
     )
}

export default TodoList