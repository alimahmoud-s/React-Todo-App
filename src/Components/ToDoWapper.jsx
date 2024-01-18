import React, { useState , useEffect} from "react";

import { ToDoForm } from "./ToDoForm";
import { ToDo } from "./ToDo"; 

export const ToDoWapper = () => {

    const [todos, setTodos] = useState(() => {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  const addTodo = (todo) => {
   if (!todo.text || /^\s*$/.test(todo.text)) {
    return 
   }
   const newTodos=[todo,...todos ]

   setTodos(newTodos)
   console.log(todo);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

   const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

 
   const updateTodo = (todoId, newValue) => {
     if (!newValue.text || /^\s*$/.test(newValue.text)) {
       return;
     }

     setTodos((prev) =>
       prev.map((item) => (item.id === todoId ? newValue : item))
     );
   };

  return (
    <>
      <div className="todo-app ">
        <h1>Get Things Done !</h1>
        <ToDoForm onSubmit={addTodo} />
        <ToDo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
};
