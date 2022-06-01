import React, { Component } from "react"

class PathView extends Component {
  render() {
    const { folder, projectName } = this.props
    return (
      <div className="center-main-path">
        <p id="text-main-path-projects">{folder}</p>
        <p id="text-main-path-aro">&gt;&gt;</p>
        <p id="text-main-path-moveapp">{projectName}</p>
      </div>
    )
  }
}

export default PathView
