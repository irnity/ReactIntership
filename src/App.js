import './Style/nav.css';
import './Style/style.css';
import './Style/sidebar.css';
import './Style/fonts.css';
import './Style/main.css';
import './Style/media.css';

import { useState, Suspense } from 'react';

import ToDo from './Components/todo/ToDo';
import Navigation from './Components/navbar/Navigation';
import SideBar from './Components/sidebar/SideBar';
import Time from './Components/time/Time';
import Name from './Components/name/Name';
import Panel from './Components/panel/Panel';
import Filters from './Components/bio/Filters';
import Hero from './Components/hero/Hero';
import ThemeContext, { themes } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else { setTheme(themes.dark); }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Suspense fallback="Loading...">
        <div>
          <Navigation share="Share" themeHandler={toggleTheme} />
          <div className="main-app">
            <SideBar />
            <div className="center-main" style={theme}>
              <Time />
              <Name />
              <Panel />
              <div className="center-main-lists" style={theme}>
                <ToDo />
              </div>
            </div>
          </div>
          <Filters />
          <Hero />
        </div>
      </Suspense>
    </ThemeContext.Provider>
  );
}

export default App;
