import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../context/ThemeContext';
import UpdatedComponent from '../hoc/withCouner';

function Navigation({ themeHandler, count, increment }) {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const languageHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="nav" style={theme}>
      <div className="nav-left" style={theme}>
        <h2 id="tasky-text">{t('tasky')}</h2>
        <h2 id="arrow-text">&#8592;</h2>
      </div>
      <div className="nav-right">
        <div className="seacrh">
          <input
            style={theme}
            id="search-tasks-text"
            type="text"
            placeholder={t('search')}
          />
        </div>
        <div className="more">
          <a id="text-nav-assignees" href="/home" style={theme}>
            {t('info')}
          </a>
          <a id="text-nav-show" href="/home" style={theme}>
            {t('contacts')}
          </a>
          <a id="text-nav-more" href="/home" style={theme}>
            {t('more')}
          </a>
        </div>
        <div className="create">
          <select id="button-nav-share" onClick={languageHandler} style={theme} defaultValue={i18n.resolvedLanguage}>
            <option value="en" disabled={i18n.resolvedLanguage === 'en'}>{t('english')}</option>
            <option value="ua" disabled={i18n.resolvedLanguage === 'ua'}>{t('ukraine')}</option>
          </select>
          <button type="button" style={theme} id="button-nav-create" onClick={() => { themeHandler(); increment(); }}>
            {t('changeColorTheme')}
          </button>
          <p id="count-top">
            {t('swap')}
            : 
            {count}
          </p>
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  themeHandler: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default UpdatedComponent(Navigation);
