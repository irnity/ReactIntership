import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import ToDoView from './ToDoView';
import data from '../../Data/todos.json';

function ToDo() {
  const theme = useContext(ThemeContext);
  const [todo, setTodo] = useState(data);
  return (  
    <>
      {todo.map((todos) => (<ToDoView theme={theme} data={todos} setTodo={setTodo} />))}
    </>
  );
}

export default ToDo;
