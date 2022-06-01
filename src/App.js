import "./Style/nav.css"
import "./Style/style.css"
import "./Style/main.css"
import "./Style/sidebar.css"
import "./Style/fonts.css"

import ToDo from "./Components/todo/ToDo"
import Navigation from "./Components/navbar/Navigation"
import SideBar from "./Components/sidebar/SideBar"
import Path from "./Components/path/Path"
import Name from "./Components/name/Name"
import Panel from "./Components/panel/Panel"
import Filters from "./Components/bio/Filters"
// import Ccomponent from "./test/Ccomponent"

function App() {
  return (
    <div>
      <Navigation share={"Share"} create={"+ Create New"} />
      <div className="main-app">
        <SideBar />
        {/* <Ccomponent /> */}
        <div className="center-main">
          <Path folder={"PROJECTS"} projectName={"CRYPTER APP"} />
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
    </div>
  )
}

export default App
