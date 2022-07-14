import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function TodoCreacte({ cancelTodoForm, createTodoHandler }) {
  const { t } = useTranslation();

  const [addFormData, setAddFormData] = useState({
    name: '',
    firstValue: '',
    secondValue: '',
    thirdValue: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData, [fieldName]: fieldValue };
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      name: addFormData.name,
      firstValue: addFormData.firstValue,
      secondValue: addFormData.secondValue,
      thirdValue: addFormData.thirdValue,
    };

    createTodoHandler(newTodo);
    setAddFormData({
      name: '',
      firstValue: '',
      secondValue: '',
      thirdValue: '',
    });
    cancelTodoForm();
  };

  return (
    <form onSubmit={handleAddFormSubmit} className="backdrop">
      <div className="modal">
        <div className="todoCreacte">
          <input 
            type="text" 
            name="name" 
            required="required"
            className="input-creacte-todo" 
            placeholder={t('nameOfDodo')}
            value={addFormData.name} 
            onChange={handleAddFormChange} 
          />
          <input 
            type="text" 
            name="firstValue" 
            required="required"
            className="input-creacte-todo"  
            placeholder={t('firstValue')}
            value={addFormData.firstValue}
            onChange={handleAddFormChange} 
          />
          <input 
            type="text" 
            name="secondValue" 
            required="required"
            className="input-creacte-todo"  
            placeholder={t('secondValue')}
            value={addFormData.secondValue}
            onChange={handleAddFormChange} 
          />
          <input 
            type="text" 
            name="thirdValue" 
            required="required"
            className="input-creacte-todo"  
            placeholder={t('thirdValue')}
            value={addFormData.thirdValue} 
            onChange={handleAddFormChange} 
          />
          <div>          
            <button 
              type="submit" 
              className="button-create-todo"
            >
              {t('addTodo')}
            </button>
            <button 
              type="button" 
              className="button-create-todo" 
              onClick={cancelTodoForm}
            >
              {t('cancel')}
              
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

TodoCreacte.propTypes = {
  cancelTodoForm: PropTypes.func.isRequired,
  createTodoHandler: PropTypes.func.isRequired,
};

export default TodoCreacte;
