import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ToDoView({
  theme,
  data,
  handleDeleteClick,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler, 
}) {
  const { t } = useTranslation();
  return (
    <div
      className="todo" 
      style={theme}
      onDragStart={(e) => dragStartHandler(e, data)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, data)}
      draggable
    >
      <div className="todo-folder-top">      
        <div className="todo-folder">
          <h2 id="text-main-column" className="inwork">
            {data.name} 
          </h2>
          <h2 id="text-main-plus">+</h2>
          <button
            type="button" 
            id="text-main-dots-one" 
            onClick={() => handleDeleteClick(data.id)}
            style={theme}
          >
            {t('delete')}
          </button>
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
  theme: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    firstValue: PropTypes.string,
    secondValue: PropTypes.string,
    thirdValue: PropTypes.string,
  }).isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragEndHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired
};

export default ToDoView;
