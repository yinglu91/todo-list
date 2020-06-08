import React from 'react';
import '../css/TodoList.css';

const TodoList = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <div>
            <button onClick={() => props.setCurrent(todo)}>EDIT</button>{' '}
            <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
