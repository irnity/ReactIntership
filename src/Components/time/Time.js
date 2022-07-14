import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';
import UpdatedComponent from '../hoc/withCouner';

function Time({ count, increment }) {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    const addSecondInterval = setInterval(() => {
      increment();
    }, 1000);

    return () => {
      clearInterval(addSecondInterval);
    };
  });

  return (
    <div className="center-main-path" style={theme}>
      <p id="text-main-path-aro">{t('time')}</p>
      <p id="text-main-path-projects">
        {count}
        {' '}
        {t('seconds')}
      </p>
    </div>
  );
}

Time.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default UpdatedComponent(Time);
