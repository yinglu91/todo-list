import React, { useState } from 'react';
import '../css/NewTodo.css';

const initTodo = { text: '' };
const initTodoError = {};

const NewTodo = (props) => {
  console.log(props);

  const [todo, setTodo] = useState(initTodo);
  const [todoError, setTodoError] = useState(initTodoError);

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    if (todo['text'].trim().length === 0) {
      setTodoError({ ...todoError, text: 'Todo text is required' });
      return;
    }

    props.onAddTodo(todo);

    setTodo(initTodo);
    setTodoError(initTodoError);
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
        {initTodoError.text && <h4 color='red'>{initTodoError.text}</h4>}
      </div>

      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
