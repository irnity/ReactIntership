import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import ToDoView from './ToDoView';
import data from '../../Data/todos.json';
import TodoCreacte from './TodoCreacte';

function ToDo() {
  const theme = useContext(ThemeContext);
  const [todo, setTodo] = useState(data);
  const [newTodoForm, setNewTodoForm] = useState(false);

  const createTodoHandler = (value) => {
    const newTodo = {
      id: todo.slice(-1)[0].id + 1,
      name: value.name,
      firstValue: value.firstValue,
      secondValue: value.secondValue,
      thirdValue: value.thirdValue,
    };
    const newTodos = [...todo, newTodo];
    setTodo(newTodos);
  };

  const newTodoFormHandler = () => {
    setNewTodoForm(true);
  };
  const cancelTodoForm = () => {
    setNewTodoForm(false);
  };

  const handleDeleteClick = (todoId) => {
    const newTodos = [...todo];

    const index = todo.findIndex((todos) => todos.id === todoId);

    newTodos.splice(index, 1);

    setTodo(newTodos);
  };
  return (  
    <div className="Todo-top">      
      {newTodoForm && <TodoCreacte cancelTodoForm={cancelTodoForm} createTodoHandler={createTodoHandler} />}
      <div className="Todo-top-top">
        <button 
          style={theme} 
          type="button" 
          id="text-main-todo-create" 
          onClick={newTodoFormHandler}
        >
          +Todo
        </button>
      </div>
      <div className="Todo-top-bottom">      
        {todo.slice(1).map((todos) => (
          <ToDoView 
            key={todos.id} 
            theme={theme} 
            data={todos} 
            setTodo={setTodo} 
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDo;
