import React from 'react';
import '../styles/TodoFilter.css';

const TodoFilter = ({ setStatus }) => {
  const filterHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <section className="filter-section" onChange={filterHandler}>
      <select name="todo-filter" id="filter">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </section>
  );
};

export default TodoFilter;