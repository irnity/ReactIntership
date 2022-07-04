import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameView extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="center-main-name">
        <span id="text-main-crypter">{name}</span>
        <span id="text-main-member">+ Member</span>
        <span />
      </div>
    );
  }
}

NameView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NameView;
