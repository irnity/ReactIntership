import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ToDoView({ theme, data }) {
  const { t } = useTranslation();
  return (
    <div className="todo" style={theme}>
      <div className="todo-folder-top">      
        <div className="todo-folder">
          <h2 id="text-main-column" className="inwork">
            {data.name}
          </h2>
          <h2 id="text-main-plus">+</h2>
          <h2 id="text-main-dots-one">...</h2>
        </div>

      </div>
      <div className="todo-blocks-top">
        <div className="todo-blocks">
          <div className="center-main-block">
            <div className="todo-research">
              <span id="text-main-block-research">{t('research')}</span>
              <span id="text-main-block-dots">...</span>
            </div>
            <div>
              <span id="text-main-block-user">{t('userInterview')}</span>
            </div>
            <div>
              <span id="text-main-block-low">{t('low')}</span>
            </div>
            <div className="main-blocks-lower-num">
              <span id="text-main-block-number">{data.firstValue}</span>
              <span id="text-main-block-number">{data.secondValue}</span>
              <span id="text-main-block-number">{data.thirdValue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

ToDoView.propTypes = {
  theme: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default ToDoView;
