import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="folder-side-bar">
          <span id="text-sidebar-folder">Folder</span>
          <span id="text-sidebar-arrow">&#8597;</span>
        </div>
        <div className="search-side-bar-input">
          <input type="text" id="text-sidebar-search" placeholder="Search" />
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
        <div className="light-side-bar">
          <h2>Dark</h2>
          <h2>Lisht</h2>
        </div>
        <div className="name-side-bar">
          <span id="text-sidebar-name">Name</span>
          <span id="text-sidebar-arrow-low">&#8595;</span>
        </div>
      </div>
    );
  }
}

export default SideBar;
