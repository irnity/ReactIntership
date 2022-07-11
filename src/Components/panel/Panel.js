import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';

function Panel() {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  
  return (
    <div className="center-main-tasks" style={theme}>
      <div>
        <span id="text-main-path-tasks">{t('tasks')}</span>
        <span id="text-main-path-obj">{t('objectives')}</span>
        <span id="text-main-path-watchlist">{t('watchList')}</span>
        <span id="text-main-path-favou">{t('favourite')}</span>
      </div>
      <div>
        <span id="text-main-path-viewb">{t('viewby')}</span>
        <span id="text-main-path-code">&#x268F;</span>
      </div>
    </div>
  );
}

export default Panel;
