import React from 'react';
import PropTypes from 'prop-types';

function EditableRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Fname..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a Sname..."
          name="secondName"
          value={editFormData.secondName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
}

EditableRow.propTypes = {
  editFormData: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  handleEditFormChange: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};

export default EditableRow;
