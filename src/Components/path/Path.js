import React, { Component } from "react"
import PathView from "./PathView"

class Path extends Component {
  render() {
    const { folder, projectName } = this.props
    return <PathView folder={folder} projectName={projectName} />
  }
}

export default Path
