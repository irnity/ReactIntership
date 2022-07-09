import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';

function Name({ name }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="center-main-name" style={theme}>
      <span id="text-main-crypter">{name}</span>
      <button type="button" id="text-main-member" style={theme}>+ Member</button>
    </div>
  );
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
