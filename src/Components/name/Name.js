import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';

function Name() {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="center-main-name" style={theme}>
      <span id="text-main-crypter">{t('crypterApp')}</span>
      <button type="button" id="text-main-member" style={theme}>{t('member')}</button>
    </div>
  );
}

export default Name;
