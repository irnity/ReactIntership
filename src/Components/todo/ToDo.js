import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';
import ToDoView from './ToDoView';
import data from '../../Data/todos.json';
import TodoCreacte from './TodoCreacte';

function ToDo() {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);

  const [todo, setTodo] = useState(data);
  const [newTodoForm, setNewTodoForm] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

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

  const dragStartHandler = (e, curTodo) => {
    setCurrentTodo(curTodo);
  };

  const dragEndHandler = () => {
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, todos) => {
    e.preventDefault();
    setTodo(
      todo.map((datas) => {
        if (datas.id === todos.id) {
          return { ...datas, id: currentTodo.id };
        }
        if (datas.id === currentTodo.id) {
          return { ...datas, id: todos.id };
        }
        return datas;
      })
    );
  };

  const sortTodos = (a, b) => {
    return a.id > b.id ? 1 : -1;
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
          {t('todo')}
        </button>
      </div>
      <div className="Todo-top-bottom">      
        {todo.sort(sortTodos).slice(1).map((todos) => (
          <ToDoView 
            key={todos.id} 
            theme={theme} 
            data={todos} 
            setTodo={setTodo} 
            handleDeleteClick={handleDeleteClick}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDo;
