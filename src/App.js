import "./Style/nav.css"
import "./Style/style.css"
import "./Style/main.css"
import "./Style/sidebar.css"
import "./Style/fonts.css"

function App() {
  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <h2>Tasky</h2>
          <h2 id="arrow-text">&#8592;</h2>
        </div>
        <div className="nav-right">
          <div className="seacrh">
            <input
              id="search-tasks-text"
              type="text"
              placeholder="Search tasks..."
            />
          </div>
          <div className="more">
            <a id="text-nav-assignees" href="/home">
              Assignees
            </a>
            <a id="text-nav-show" href="/home">
              Show
            </a>
            <a id="tsext-nav-more" href="/home">
              More
            </a>
          </div>
          <div className="create">
            <button id="button-nav-share"> Share</button>
            <button id="button-nav-create">+ Create New</button>
          </div>
        </div>
      </div>
      <div className="main-app">
        <div className="side-bar">
          <div className="folder-side-bar">
            <span id="text-sidebar-folder">Folder</span>
            <span id="text-sidebar-arrow">&#8597;</span>
          </div>
          <div className="search-side-bar-input">
            <input type="text" id="text-sidebar-search" placeholder="Search" />
          </div>
          <div className="menu-side-bar">
            <span id="text-sidebar-menu">MENU</span>
          </div>
          <div className="propjects-side-bar">
            <span id="text-sidebar-dashboard">Dashboard</span>
            <span id="text-sidebar-projects">Projects</span>
            <span id="text-sidebar-tasks">Your tasks</span>
            <span id="text-sidebar-calendar">Calendar</span>
          </div>
          <div className="general-side-bar">
            <span id="text-sidebar-general">General</span>
          </div>
          <div className="support-side-bar">
            <span id="text-sidebar-settings">Settings</span>
            <span id="text-sidebar-support">Support</span>
          </div>
          <div className="light-side-bar">
            <h2>Dark</h2>
            <h2>Lisht</h2>
          </div>
          <div className="name-side-bar">
            <span id="text-sidebar-name">Name</span>
            <span id="text-sidebar-arrow-low">&#8595;</span>
          </div>
        </div>
        <div className="center-main">
          <div className="center-main-path">
            <p id="text-main-path-projects">PROJECTS</p>
            <p id="text-main-path-aro"></p>
            <p id="text-main-path-apps">APPS</p>
            <p id="text-main-path-arow"></p>
            <p id="text-main-path-moveapp">MOVE APP</p>
          </div>
          <div className="center-main-name">
            <span id="text-main-crypter">Crypter App</span>
            <span id="text-main-member">+ Member</span>
          </div>
          <div className="center-main-tasks">
            <div>
              <span id="text-main-path-tasks">Tasks</span>
              <span id="text-main-path-obj">Objectives</span>
              <span id="text-main-path-watchlist">Watch List</span>
              <span id="text-main-path-favou">Favourite</span>
            </div>
            <div>
              <span id="text-main-path-viewb">View by</span>
              <span id="text-main-path-code">&#x268F;</span>
            </div>
          </div>
          <div className="center-main-lists">
            <div className="todo">
              <div className="todo-folder">
                <h2 id="text-main-column" className="todos">
                  TO DO
                </h2>
                <h2 id="text-main-plus">+</h2>
                <h2 id="text-main-dots">...</h2>
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
                    <span id="text-main-block-number">3</span>
                    <span id="text-main-block-number">12</span>
                    <span id="text-main-block-number">1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="todo">
              <div className="todo-folder">
                <h2 id="text-main-column" className="inwork">
                  IN WORK
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
                    <span id="text-main-block-number">3</span>
                    <span id="text-main-block-number">12</span>
                    <span id="text-main-block-number">1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="todo">
              <div className="todo-folder">
                <h2 id="text-main-column" className="review">
                  REVIEW
                </h2>
                <h2 id="text-main-plus">+</h2>
                <h2 id="text-main-dots">...</h2>
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
                    <span id="text-main-block-number">3</span>
                    <span id="text-main-block-number">12</span>
                    <span id="text-main-block-number">1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="todo">
              <div className="todo-folder">
                <h2 id="text-main-column" className="done">
                  DONE
                </h2>
                <h2 id="text-main-plus">+</h2>
                <h2 id="text-main-dots">...</h2>
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
                    <span id="text-main-block-number">3</span>
                    <span id="text-main-block-number">12</span>
                    <span id="text-main-block-number">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
