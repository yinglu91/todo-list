import React, { useState, useEffect } from 'react';
import './NewTodo.css';

const NewTodo = (props) => {
  const [todo, setTodo] = useState(props.todo);

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const todoSubmitHandler = (e) => {
    e.preventDefault();

    props.onEditTodo(todo);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='text'>Todo Text</label>
        <input
          type='text'
          id='text'
          name='text'
          value={todo.text}
          onChange={onChange}
        />
      </div>

      <button type='submit'>EDIT TODO</button>
    </form>
  );
};

export default NewTodo;
