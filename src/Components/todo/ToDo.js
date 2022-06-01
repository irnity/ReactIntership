import React from "react"
import ToDoView from "./ToDoView"
//сделать через .map
class ToDo extends React.Component {
  render() {
    const { name } = this.props
    const { firstValue, secondValue, thirdValue } = this.props
    return (
      <ToDoView
        name={name}
        firstValue={firstValue}
        secondValue={secondValue}
        thirdValue={thirdValue}
      />
    )
  }
}

export default ToDo
