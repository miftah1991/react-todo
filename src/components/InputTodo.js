import React from 'react';
// Library to generate Unique ID
import { v4 as uuidv4 } from 'uuid';
import './styles/TodoInput.css';

const TodoInput = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputText) return;

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        completed: false,
        text: inputText,
      },
    ]);

    // Clear input
    setInputText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add Task"
        value={inputText}
        onChange={inputHandler}
        className="text-input"
      />
    </form>
  );
};

export default TodoInput;