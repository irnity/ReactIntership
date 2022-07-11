import React from 'react';
import PropTypes from 'prop-types';

function ReadOnlyRow({
  contact,
  handleEditClick,
  handleDeleteClick,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) {
  const onkeydown = () => {
  };
  return (
    <tr
      onDragStart={(e) => dragStartHandler(e, contact)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, contact)}
      onKeyDownCapture={onkeydown}
      draggable
    >
      <td>{contact.firstName}</td>
      <td>{contact.secondName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

ReadOnlyRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contact: PropTypes.object.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragEndHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
};

export default ReadOnlyRow;
