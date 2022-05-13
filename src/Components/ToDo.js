import React from "react"

class ToDo extends React.Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-folder">
          <h2 id="text-main-column" className="inwork">
            {this.props.name}
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
              <span id="text-main-block-number">{this.props.firstValue}</span>
              <span id="text-main-block-number">{this.props.secondValue}</span>
              <span id="text-main-block-number">{this.props.thirdValue}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDo
