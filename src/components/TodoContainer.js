import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoInput from './InputTodo';
import TodoList from './TodoList';
import './styles/ToDoContainer.css';
//Input
const TodoContainer = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  });

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  };
  return (
    <>
      <Header />
      <div className="todo-container">
        <TodoInput
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />

        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default TodoContainer;