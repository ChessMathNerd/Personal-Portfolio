import { useState } from 'react';

import NavMenu from "./components/elements/navmenu";
import Welcome from './components/pages/welcome';
import About from './components/pages/about';
import Skills from './components/pages/skills';
import CSS from './components/pages/css';

import "./app.css";
import Constants from './services/utils/constants';

function App() {

  // page control variable
  // 0: welcome page
  // 1: CSS
  // 2: HTML
  // 3: JavaScript
  const [page, setPage] = useState(0);
  // subpage router variable
  // 0: welcome
  // 1: bio/about
  // 2: skills
  // 3: website info
  const [subpage, setSubPage] = useState(0);
  // Controls whether the navbar is out or not
  const [nav, setNav] = useState(0);

  const show_sidenav = () => {
    let phone = getComputedStyle(document.querySelector(".sidebar")).maxWidth;
    console.log(phone)
    document.getElementById("sidebar").style.left = "0px";
    document.getElementById("sidebar").style.visibility = "unset";
    setNav(1);
  }

  const hide_sidenav = () => {
    let phone = getComputedStyle(document.querySelector(".sidebar")).maxWidth;
    console.log(phone)
    document.getElementById("sidebar").style.left = "-" + phone;
    document.getElementById("sidebar").style.visibility = "hidden";
    setNav(0);
  }

  // subpage router methods
  const show_main = () => {
    setPage(0); setSubPage(0);
    if (page === 0) {
      hide_sidenav();
    }
  }
  const show_bio = () => {setPage(0); setSubPage(1); hide_sidenav()}
  const show_skills = () => {setPage(0); setSubPage(2); hide_sidenav()}
  const show_about = () => {setPage(0); setSubPage(3); hide_sidenav()}

  // page routers methods
  const show_css = () => {setPage(1); setNav(0)}
  const show_html = () => {setPage(2); setNav(0)}
  const show_js = () => {setPage(3); setNav(0)}

  return (
    <div className="App">
      {/* Top navbar, this is always here */}
      

      {/* the welcome component and its navbar. Only rendered when page == 0 */}
      {(page === 0) ? 
      <div>
        <div className="navbar-wrapper">
          <img onClick={(nav === 0) ? show_sidenav : hide_sidenav} className="navbar-ham-button" 
          src={Constants.hamburger_icon} 
          alt="Not found" title="Popout menu"></img>
          <div className="navbar-button-wrapper">
            <button onClick={show_css} className="navbar-button">CSS</button>
            <button onClick={show_html} className="navbar-button">HTML</button>
            <button onClick={show_js} className="navbar-button">JavaScript</button>
          </div>
        </div>
        <div>
          <div className="welcome" id="welcome">
            {(subpage === 0) ? <Welcome /> : null}
            {/* {(subpage === 1) ? <Bio />: null} */}
            {(subpage === 2) ? <Skills />: null}
            {(subpage === 3) ? <About />: null}
          </div>

          <div className="sidebar" id="sidebar">
            <button onClick={show_main} className="sidebar-button sidebar-button-1">Main Menu</button>
            <button onClick={show_bio} className="sidebar-button sidebar-button-2">Bio</button>
            <button onClick={show_skills} className="sidebar-button sidebar-button-1">Skills</button>
            <button onClick={show_about} className="sidebar-button sidebar-button-2">About this website</button>
          </div>
        </div>
      </div> : null
      }
      {(page === 1) ? <CSS show_main={show_main}/> : null}
      {/* page === 2: show HTML page */}
      {/* page === 3: show JavaScript page */}
    </div>
  );
}

export default App;
