import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/ThemeContext';

function Navigation({ share, themeHandler }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="nav" style={theme}>
      <div className="nav-left" style={theme}>
        <h2 id="tasky-text">Tasky</h2>
        <h2 id="arrow-text">&#8592;</h2>
      </div>
      <div className="nav-right">
        <div className="seacrh">
          <input
            style={theme}
            id="search-tasks-text"
            type="text"
            placeholder="Search tasks..."
          />
        </div>
        <div className="more">
          <p id="text-nav-assignees" href="/home">
            Assignees
          </p>
          <p id="text-nav-show" href="/home">
            Show
          </p>
          <p id="text-nav-more" href="/home">
            More
          </p>
        </div>
        <div className="create">
          <button type="button" id="button-nav-share" style={theme}>
            {share}
          </button>
          <button type="button" style={theme} id="button-nav-create" onClick={themeHandler}>Change Color Theme</button>
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  share: PropTypes.string.isRequired,
  themeHandler: PropTypes.func.isRequired,
};

export default Navigation;
