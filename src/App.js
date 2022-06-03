import "./Style/nav.css"
import "./Style/style.css"
import "./Style/main.css"
import "./Style/sidebar.css"
import "./Style/fonts.css"

import ToDo from "./Components/todo/ToDo"
import Navigation from "./Components/navbar/Navigation"
import SideBar from "./Components/sidebar/SideBar"
import Time from "./Components/time/Time"
import Name from "./Components/name/Name"
import Panel from "./Components/panel/Panel"
import Filters from "./Components/bio/Filters"
// import Ccomponent from "./test/trying/Ccomponent"

function App() {
  return (
    <div>
      <Navigation share={"Share"} create={"+ Create New"} />
      <div className="main-app">
        <SideBar />
        <div className="center-main">
          <Time />
          <Name name={"Crypter App"} />
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
      {/* <Ccomponent /> */}
    </div>
  )
}

export default App
