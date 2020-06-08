import React, { useState } from 'react';
import '../css/NewTodo.css';

const initTodo = { text: '' };
const NewTodo = (props) => {
  console.log(props);

  const [todo, setTodo] = useState(initTodo);

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    props.onAddTodo(todo);

    setTodo(initTodo);
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

      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
