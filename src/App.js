import { useState } from 'react';

import NavMenu from "./components/elements/navmenu";
import NavBar from './components/elements/navbar';
import SideBar from './components/elements/sidebar';
import Welcome from './components/pages/welcome';

import "./app.css";

function App() {

  // page control variable
  // 0: welcome page
  // 1: CSS
  // 2: HTML
  // 3: JavaScript
  const [page, setPage] = useState(0);
  // Controls whether the navbar is out or not
  const [nav, setNav] = useState(0);

  const show_sidenav = () => {
    document.getElementById("sidebar").style.left = "0px";
    document.getElementById("welcome").style.marginLeft = "200px";
    setNav(1);
  }

  const hide_sidenav = () => {
    document.getElementById("sidebar").style.left = "-200px";
    document.getElementById("welcome").style.marginLeft = "0px";
    setNav(0);
  }

  return (
    <div className="App">
      {/* Top navbar, this is always here */}
      <div className="navbar-wrapper">
          <img onClick={(nav === 0) ? show_sidenav : hide_sidenav} className="navbar-ham-button" 
            src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png" 
            alt="Not found" title="Popout menu"></img>
      </div>

      {/* the welcome component and its navbar. Only rendered when page == 0 */}
      {(page === 0) ? <div>
        <div className="welcome" id="welcome">
          <Welcome />
        </div>

        <div className="sidebar" id="sidebar">
          <button className="sidebar-menu-label">Main Menu</button>
          <button className="sidebar-button sidebar-button-1">Bio</button>
          <button className="sidebar-button sidebar-button-2">Skills</button>
          <button className="sidebar-button sidebar-button-3">About this website</button>
        </div>
      </div> : null
      }
      {/* page === 1: show CSS page */}
      {/* page === 2: show HTML page */}
      {/* page === 3: show JavaScript page */}
    </div>
  );
}

export default App;
