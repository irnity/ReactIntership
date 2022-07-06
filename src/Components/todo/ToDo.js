import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ToDoView from './ToDoView';
import ThemeContext from '../context/ThemeContext';

function ToDo({
  name, firstValue, secondValue, thirdValue 
}) {
  const theme = useContext(ThemeContext);
  return (
    <ToDoView
      theme={theme}
      name={name}
      firstValue={firstValue}
      secondValue={secondValue}
      thirdValue={thirdValue}
    />
  );
}

ToDo.propTypes = {
  name: PropTypes.string.isRequired,
  firstValue: PropTypes.string.isRequired,
  secondValue: PropTypes.string.isRequired,
  thirdValue: PropTypes.string.isRequired,
};

export default ToDo;
