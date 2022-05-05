const Navigation = () => {
  return (
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
          <a id="text-nav-more" href="/home">
            More
          </a>
        </div>
        <div className="create">
          <button id="button-nav-share"> Share</button>
          <button id="button-nav-create">+ Create New</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
