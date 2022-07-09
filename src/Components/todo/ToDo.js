import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';

function ToDo({
  name, firstValue, secondValue, thirdValue 
}) {
  const theme = useContext(ThemeContext);

  return (
    <div className="todo" style={theme}>
      <div className="todo-folder-top">      
        <div className="todo-folder">
          <h2 id="text-main-column" className="inwork">
            {name}
          </h2>
          <h2 id="text-main-plus">+</h2>
          <h2 id="text-main-dots-one">...</h2>
        </div>

      </div>
      <div className="todo-blocks-top">
        <div className="todo-blocks">
          <div className="center-main-block">
            <div className="todo-research">
              <span id="text-main-block-research">Research</span>
              <span id="text-main-block-dots">...</span>
            </div>
            <div>
              <span id="text-main-block-user">User Interview</span>
            </div>
            <div>
              <span id="text-main-block-low">Low</span>
            </div>
            <div className="main-blocks-lower-num">
              <span id="text-main-block-number">{firstValue}</span>
              <span id="text-main-block-number">{secondValue}</span>
              <span id="text-main-block-number">{thirdValue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

ToDo.propTypes = {
  name: PropTypes.string.isRequired,
  firstValue: PropTypes.string.isRequired,
  secondValue: PropTypes.string.isRequired,
  thirdValue: PropTypes.string.isRequired,
};

export default ToDo;
