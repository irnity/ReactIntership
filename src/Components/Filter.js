import "../Style/filter.css"
import { useState } from "react"

const Filter = () => {
  const data = [
    { id: 1, name: "Igor", surname: "Ivanov", age: "27" },
    { id: 2, name: "Gregory", surname: "Shabelnik", age: "44" },
    { id: 3, name: "Danil", surname: "Ishytin", age: "19" },
  ]
  const [userList, setUserList] = useState(data)

  const handleRemoveItem = (id) => {
    setUserList(userList.filter((info) => info.id !== id))
  }

  const [enteredName, setEnteredName] = useState("")
  const [enteredSurname, setEnteredSurname] = useState("")
  const [enteredAge, setEnteredAge] = useState("")

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }
  const surnameChangeHandler = (e) => {
    setEnteredSurname(e.target.value)
  }
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  const addUserHandler = (uName, uSurname, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          surname: uSurname,
          age: uAge,
          id: Math.random().toString(),
        },
      ]
    })
  }

  function addPersonHandler(e) {
    e.preventDefault()
    addUserHandler(enteredName, enteredSurname, enteredAge)
    setEnteredName("")
    setEnteredSurname("")
    setEnteredAge("")
    console.log(filterlist)
  }

  const filterlist = userList.map((user) => (
    <div>
      <li className="color" key={user.id}>
        {user.name} {user.surname}, {user.age} year old,
      </li>
      <button className="button" onClick={() => handleRemoveItem(user.id)}>
        delete
      </button>
    </div>
  ))

  const handleSort = (type) => {
    const draftList = [...userList]

    switch (type) {
      case "Switch2":
        draftList.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "Switch3":
        draftList.sort((a, b) => a.age - b.age)
        break
      default:
      //do nothing
    }

    setUserList(draftList)
  }

  return (
    <div className="bg">
      <div className="input card ">
        <form className="" onSubmit={addPersonHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={enteredName}
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            onChange={surnameChangeHandler}
            value={enteredSurname}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <button className="button" type="submit">
            Add user
          </button>
        </form>
      </div>
      <div className="table">
        <div className="cardt">
          <div className="users ">
            <button className="button" onClick={() => handleSort("Switch2")}>
              BY NAME
            </button>
            <button className="button" onClick={() => handleSort("Switch3")}>
              BY AGE
            </button>
            {filterlist}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
