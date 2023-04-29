import { useState } from "react";

import Constants from "../../services/utils/constants";
import KeyBoard from "./JS demos/keyboard.js";

import "../../css/pages/javascript.css";

const JavaScript = (props) => {

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
            document.getElementById("js-sidebar-pc").style.left = "0px";
        }
        else {
            document.getElementById("js-sidebar-mobile").style.left = "0px";
        }
        setNav(1);
    }

    const hide_nav = () => {
        if (window.innerWidth > Constants.breakpoint_1) {
            document.getElementById("js-sidebar-pc").style.left = "-200px";
        }
        else {
            document.getElementById("js-sidebar-mobile").style.left = "-100vw";
        }
        setNav(0);
    }

    return (
        <div>
            <div className="js-navbar-wrapper">
                <img onClick={props.show_main} className="js-navbar-back-button" 
                src={Constants.back_icon} 
                alt="Not found" title="Back to main"></img>
                <div className="js-navbar-button-wrapper">
                    <button className="js-navbar-button">JavaScript</button>
                </div>
                <img onClick={(nav === 1) ? hide_nav : show_nav} className="js-navbar-options-button" 
                src={Constants.hamburger_icon} 
                alt="Not found" title="Options"></img>
            </div>

            <div className="js-sidebar-pc" id="js-sidebar-pc">
            <div className="js-sidebar-label-wrapper"><label className="js-sidebar-label">Projects</label></div>
                <label className="js-sidebar-link" onClick={() => change_page(1)}>Keyboard</label>
                {/* <label className="js-sidebar-link">Windows</label> */}
            </div>

            <div className="js-sidebar-mobile" id="js-sidebar-mobile">
                <div className="js-sidebar-label-wrapper"><label className="js-sidebar-label">Projects</label></div>
                <label className="js-sidebar-link" onClick={() => change_page(1)}>Keyboard</label>
                {/* <label className="js-sidebar-link">Windows</label> */}
            </div>

            <div className="js-content-wrapper">
                {(page === 1) ? <KeyBoard /> : null}
            </div>
        </div>
    )
}

export default JavaScript;