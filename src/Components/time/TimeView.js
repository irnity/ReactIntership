import React from 'react';
import PropTypes from 'prop-types';

function TimeView({ currentSecond, theme }) {
  return (
    <div className="center-main-path" style={theme}>
      <p id="text-main-path-aro">Time on this page:</p>
      <p id="text-main-path-projects">{currentSecond}</p>
    </div>
  );
}

TimeView.propTypes = {
  currentSecond: PropTypes.number.isRequired,
  theme: PropTypes.number.isRequired,
};

export default TimeView;
