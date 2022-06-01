import React, { Component } from "react"
import NavigationView from "./NavigationView"

class Navigation extends Component {
  render() {
    const { share, create } = this.props
    return <NavigationView share={share} create={create} />
  }
}

export default Navigation
