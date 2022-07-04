import React from 'react';
import PropTypes from 'prop-types';
import ToDoView from './ToDoView';

class ToDo extends React.Component {
  render() {
    const { name } = this.props;
    const { firstValue, secondValue, thirdValue } = this.props;
    return (
      <ToDoView
        name={name}
        firstValue={firstValue}
        secondValue={secondValue}
        thirdValue={thirdValue}
      />
    );
  }
}

ToDo.propTypes = {
  name: PropTypes.string.isRequired,
  firstValue: PropTypes.string.isRequired,
  secondValue: PropTypes.string.isRequired,
  thirdValue: PropTypes.string.isRequired,
};

export default ToDo;
