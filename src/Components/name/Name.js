import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameView from './NameView';

class Name extends Component {
  render() {
    const { name } = this.props;
    return <NameView name={name} />;
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
