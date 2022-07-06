import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Panel() {
  const theme = useContext(ThemeContext);
  
  return (
    <div className="center-main-tasks" style={theme}>
      <div>
        <span id="text-main-path-tasks">Tasks</span>
        <span id="text-main-path-obj">Objectives</span>
        <span id="text-main-path-watchlist">Watch List</span>
        <span id="text-main-path-favou">Favourite</span>
      </div>
      <div>
        <span id="text-main-path-viewb">View by</span>
        <span id="text-main-path-code">&#x268F;</span>
      </div>
    </div>
  );
}

export default Panel;
