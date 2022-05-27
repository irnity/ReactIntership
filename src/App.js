import "./Style/nav.css"
import "./Style/style.css"
import "./Style/main.css"
import "./Style/sidebar.css"
import "./Style/fonts.css"

import ToDo from "./Components/ToDo"
import Navigation from "./Components/Navigation"
import SideBar from "./Components/SideBar"
import Path from "./Components/Path"
import Name from "./Components/Name"
import Panel from "./Components/Panel"
import Filters from "./Components/bio/Filters"
// import Ccomponent from "./test/Ccomponent"

function App() {
  return (
    <div>
      <Navigation />
      <div className="main-app">
        <SideBar />
        {/* <Ccomponent /> */}
        <div className="center-main">
          <Path />
          <Name />
          <Panel />
          <div className="center-main-lists">
            <ToDo
              name={"Start"}
              firstValue="4"
              secondValue="2"
              thirdValue="65"
            />
            <ToDo
              name={"OnProgress"}
              firstValue="6"
              secondValue="22"
              thirdValue="14"
            />
            <ToDo
              name={"Rate"}
              firstValue="7"
              secondValue="3"
              thirdValue="12"
            />
            <ToDo
              name={"Finished"}
              firstValue="1"
              secondValue="11"
              thirdValue="9"
            />
          </div>
        </div>
      </div>
      <Filters />
    </div>
  )
}

export default App
