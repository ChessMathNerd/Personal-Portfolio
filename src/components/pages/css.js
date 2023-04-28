import { useState } from "react";

import Constants from "../../services/utils/constants";
import CSS_Buttons from "./CSS demos/css_buttons";
import CSS_Navbars from "./CSS demos/css_navbars";
import HTML_Forms from "./HTML demos/HTML_Forms";

import "../../css/pages/css.css";

const CSS = (props) => {

    // page control variable
    // also controls which of the links on the left side in the navpanel will be colored
    const [page, setPage] = useState(1);
    // navbar control variable
    const [nav, setNav] = useState(0);

    const change_page = (num) => {
        setPage(num);
        if (window.innerWidth <= Constants.breakpoint_1) {
            hide_nav();
        }
    }   

    const show_nav = () => {
        if (window.innerWidth > Constants.breakpoint_1) {
            document.getElementById("css-sidebar-pc").style.left = "0px";
        }
        else {
            document.getElementById("css-sidebar-mobile").style.left = "0px";
        }
        setNav(1);
    }

    const hide_nav = () => {
        if (window.innerWidth > Constants.breakpoint_1) {
            document.getElementById("css-sidebar-pc").style.left = "-200px";
        }
        else {
            document.getElementById("css-sidebar-mobile").style.left = "-100vw";
        }
        setNav(0);
    }

    return (
        <div>
            <div className="css-navbar-wrapper">
                <img onClick={props.show_main} className="css-navbar-back-button" 
                src={Constants.back_icon} 
                alt="Not found" title="Back to main"></img>
                <div className="css-navbar-button-wrapper">
                    <button className="css-navbar-button">CSS/HTML Demos</button>
                </div>
                <img onClick={(nav === 1) ? hide_nav : show_nav} className="css-navbar-options-button" 
                src={Constants.hamburger_icon} 
                alt="Not found" title="Options"></img>
            </div>

            <div className="css-sidebar-pc" id="css-sidebar-pc">
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Basics</label></div>
                <label className="css-sidebar-link" onClick={() => change_page(1)}>Buttons</label>
                <label className="css-sidebar-link" onClick={() => change_page(2)}>Forms</label>
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Navigation</label></div>
                <label className="css-sidebar-link" onClick={() => change_page(3)}>Top navbars</label>
                <label className="css-sidebar-link">Side navbars</label>
                <label className="css-sidebar-link">Dropdowns</label>
                <label className="css-sidebar-link">Megamenus</label>
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Windows</label></div>
                <label className="css-sidebar-link">Modals</label>
                <label className="css-sidebar-link">Popups</label>
            </div>

            <div className="css-sidebar-mobile" id="css-sidebar-mobile">
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Basics</label></div>
                <label className="css-sidebar-link" onClick={() => change_page(1)}>Buttons</label>
                <label className="css-sidebar-link" onClick={() => change_page(2)}>Forms</label>
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Navigation</label></div>
                <label className="css-sidebar-link" onClick={() => change_page(3)}>Top navbars</label>
                <label className="css-sidebar-link">Side navbars</label>
                <label className="css-sidebar-link">Dropdowns</label>
                <label className="css-sidebar-link">Megamenus</label>
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Windows</label></div>
                <label className="css-sidebar-link">Modals</label>
                <label className="css-sidebar-link">Popups</label>
            </div>

            <div className="css-content-wrapper">
                {(page === 1) ? <CSS_Buttons /> : null}
                {(page === 2) ? <HTML_Forms /> : null}
                {(page === 3) ? <CSS_Navbars /> : null}
            </div>
        </div>
    )
}

export default CSS;