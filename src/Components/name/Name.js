import React, { Component } from "react"
import NameView from "./NameView"

class Name extends Component {
  render() {
    const { name } = this.props
    return <NameView name={name} />
  }
}

export default Name
