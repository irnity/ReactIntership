import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoView extends Component {
  render() {
    const { name, theme } = this.props;
    const { firstValue, secondValue, thirdValue } = this.props;
    return (
      <div className="todo" style={theme}>
        <div className="todo-folder">
          <h2 id="text-main-column" className="inwork">
            {name}
          </h2>
          <h2 id="text-main-plus">+</h2>
          <h2 id="text-main-dots-one">...</h2>
        </div>
        <div className="todo-blocks">
          <div className="center-main-block" style={theme}>
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
            <div className="main-blocks-lower-num" style={theme}>
              <span id="text-main-block-number">{firstValue}</span>
              <span id="text-main-block-number">{secondValue}</span>
              <span id="text-main-block-number">{thirdValue}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ToDoView.propTypes = {
  name: PropTypes.string.isRequired,
  firstValue: PropTypes.string.isRequired,
  secondValue: PropTypes.string.isRequired,
  thirdValue: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ToDoView;
