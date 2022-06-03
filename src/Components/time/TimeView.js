import React from "react"

const TimeView = (props) => {
  return (
    <div className="center-main-path">
      <p id="text-main-path-aro">Time on this page:</p>
      <p id="text-main-path-projects">{props.currentSecond}</p>
    </div>
  )
}

export default TimeView
