import React, { Component } from "react"

class NameView extends Component {
  render() {
    const { name } = this.props
    return (
      <div className="center-main-name">
        <span id="text-main-crypter">{name}</span>
        <span id="text-main-member">+ Member</span>
        <span></span>
      </div>
    )
  }
}

export default NameView
