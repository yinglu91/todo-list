import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import EditTodo from './components/EditTodo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState(null);

  const addTodoHandler = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), ...newTodo },
    ]);
  };

  const editTodoHandler = (todoEdited) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoEdited.id ? todoEdited : todo
      );
    });

    setCurrent(null);
  };

  const deleteTodoHandler = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      {!current && <NewTodo onAddTodo={addTodoHandler} />}
      {current && <EditTodo onEditTodo={editTodoHandler} todo={current} />}

      <TodoList
        items={todos}
        setCurrent={setCurrent}
        onDeleteTodo={deleteTodoHandler}
      />
    </div>
  );
};

export default App;
