import React, { useState, useEffect ,useRef } from 'react'

export const ToDoForm = (props) => {
  const [Value, setValue] = useState(props.edit?props.edit.value:'');


  const inputRef=useRef(null)


useEffect(()=>{
  inputRef.current.focus()
})


  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random()
      *10000),
      text:Value
    })
    setValue('')
  };
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  return (
    <>
      <form className="todo-form" onSubmit={handelSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              className="todo-input edit"
              placeholder="Update your Task"
              value={Value}
              onChange={handleChange}
              name="text"
              ref={inputRef}
            />
            <button type="submit" className="todo-button edit">
              Update Task
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="todo-input"
              placeholder="what is the task today"
              value={Value}
              onChange={handleChange}
              name="text"
              ref={inputRef}
            />
            <button type="submit" className="todo-button">
              Add Task
            </button>
          </>
        )}
      </form>
    </>
  );
};
