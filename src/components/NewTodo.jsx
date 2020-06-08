import React, { useRef } from 'react';
import './NewTodo.css';

const NewTodo = (props) => {
  const textInputRef = useRef();

  const todoSubmitHandler = (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;
    props.onAddTodo(enteredText);

    textInputRef.current.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='text'>Todo Text</label>
        <input type='text' id='text' name='text' ref={textInputRef} />
      </div>

      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
