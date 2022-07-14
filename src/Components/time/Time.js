import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';

function Time() {
  const [currentSecond, setCurrentSecond] = useState(0);
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    const addSecondInterval = setInterval(() => {
      setCurrentSecond(currentSecond + 1);
    }, 1000);

    return () => {
      clearInterval(addSecondInterval);
    };
  });

  return (
    <div className="center-main-path" style={theme}>
      <p id="text-main-path-aro">{t('time')}</p>
      <p id="text-main-path-projects">
        {currentSecond}
        {' '}
        {t('seconds')}
      </p>
    </div>
  );
}

export default Time;
