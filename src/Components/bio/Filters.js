import React, { useState, Fragment } from "react"
import { nanoid } from "nanoid"
import "../../Style/filters.css"
import data from "../../Data/data.json"
import EditableRow from "./EditableRow"
import ReadOnlyRow from "./ReadOnlyRow"

const Filters = () => {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    secondName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    secondName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...addFormData, [fieldName]: fieldValue }

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData, [fieldName]: fieldValue }

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      secondName: addFormData.secondName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      secondName: editFormData.secondName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }

    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact

    setContacts(newContacts)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      firstName: contact.firstName,
      secondName: contact.secondName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts)
  }

  const handleSort = (type) => {
    const draftList = [...contacts]

    switch (type) {
      case "Switch1":
        draftList.sort((a, b) => a.firstName.localeCompare(b.firstName))
        break
      case "Switch2":
        draftList.sort((a, b) => a.secondName.localeCompare(b.secondName))
        break
      default:
      //do nothing
    }
    setContacts(draftList)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("Switch1")}>FirstName</th>
              <th onClick={() => handleSort("Switch2")}>SecondName</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter a Fname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="secondName"
          required="required"
          placeholder="Enter an Sname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Filters
