import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';

function SideBar() {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="side-bar" style={theme}>
      <div className="folder-side-bar" style={theme}>
        <span id="text-sidebar-folder">{t('folder')}</span>
        <span id="text-sidebar-arrow">&#8597;</span>
      </div>
      <div className="search-side-bar-input">
        <input type="text" id="text-sidebar-search" style={theme} placeholder={t('search')} />
      </div>
      <div className="menu-side-bar">
        <span id="text-sidebar-menu">{t('menu')}</span>
      </div>
      <div className="propjects-side-bar">
        <span id="text-sidebar-dashboard">{t('dashboard')}</span>
        <span id="text-sidebar-projects">{t('projects')}</span>
        <span id="text-sidebar-tasks">{t('yourtasks')}</span>
        <span id="text-sidebar-calendar">{t('calendar')}</span>
      </div>
      <div className="general-side-bar">
        <span id="text-sidebar-general">{t('general')}</span>
      </div>
      <div className="support-side-bar">
        <span id="text-sidebar-settings">{t('settings')}</span>
        <span id="text-sidebar-support">{t('support')}</span>
      </div>
    </div>
  );
}

export default SideBar;
