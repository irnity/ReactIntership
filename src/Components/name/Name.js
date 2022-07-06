import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';

function Name({ name }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="center-main-name" style={theme}>
      <span id="text-main-crypter">{name}</span>
      <span id="text-main-member">+ Member</span>
      <span />
    </div>
  );
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
