import React, { Component } from "react"

class ToDoView extends Component {
  render() {
    const { name } = this.props
    const { firstValue, secondValue, thirdValue } = this.props
    return (
      <div className="todo">
        <div className="todo-folder">
          <h2 id="text-main-column" className="inwork">
            {name}
          </h2>
          <h2 id="text-main-plus">+</h2>
          <h2 id="text-main-dots-one">...</h2>
        </div>
        <div className="todo-blocks">
          <div className="center-main-block">
            <div className="todo-research">
              <span id="text-main-block-research">Research</span>
              <span id="text-main-block-dots">...</span>
            </div>
            <div>
              <span id="text-main-block-user">User Interview</span>
            </div>
            <div>
              <span id="text-main-block-low">Low</span>
            </div>
            <div className="main-blocks-lower-num">
              <span id="text-main-block-number">{firstValue}</span>
              <span id="text-main-block-number">{secondValue}</span>
              <span id="text-main-block-number">{thirdValue}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoView
