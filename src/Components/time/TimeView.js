import React from 'react';
import PropTypes from 'prop-types';

function TimeView({ currentSecond }) {
  return (
    <div className="center-main-path">
      <p id="text-main-path-aro">Time on this page:</p>
      <p id="text-main-path-projects">{currentSecond}</p>
    </div>
  );
}

TimeView.propTypes = {
  currentSecond: PropTypes.string.isRequired,
};

export default TimeView;
