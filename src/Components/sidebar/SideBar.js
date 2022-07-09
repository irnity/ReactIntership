import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function SideBar() {
  const theme = useContext(ThemeContext);
  return (
    
    <div className="side-bar" style={theme}>
      <div className="folder-side-bar" style={theme}>
        <span id="text-sidebar-folder">Folder</span>
        <span id="text-sidebar-arrow">&#8597;</span>
      </div>
      <div className="search-side-bar-input">
        <input type="text" id="text-sidebar-search" style={theme} placeholder="Search" />
      </div>
      <div className="menu-side-bar">
        <span id="text-sidebar-menu">MENU</span>
      </div>
      <div className="propjects-side-bar">
        <span id="text-sidebar-dashboard">Dashboard</span>
        <span id="text-sidebar-projects">Projects</span>
        <span id="text-sidebar-tasks">Your tasks</span>
        <span id="text-sidebar-calendar">Calendar</span>
      </div>
      <div className="general-side-bar">
        <span id="text-sidebar-general">General</span>
      </div>
      <div className="support-side-bar">
        <span id="text-sidebar-settings">Settings</span>
        <span id="text-sidebar-support">Support</span>
      </div>
    </div>
  );
}

export default SideBar;
