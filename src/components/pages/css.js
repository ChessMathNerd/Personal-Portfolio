import { useState } from "react";

import Constants from "../../services/utils/constants";
import CSS_Buttons from "./CSS demos/css_buttons";

import "../../css/pages/css.css";

const CSS = (props) => {

    // page control variable
    // also controls which of the links on the left side in the navpanel will be colored
    const [page, setPage] = useState(1);

    const change_page = (num) => {
        setPage(num);
    }   

    return (
        <div>
            <div className="css-navbar-wrapper">
                <img onClick={props.show_main} className="css-navbar-back-button" 
                src={Constants.back_icon} 
                alt="Not found" title="Back to main"></img>
                <div className="css-navbar-button-wrapper">
                    <button className="css-navbar-button">CSS Demos</button>
                </div>
            </div>

            <div className="css-sidebar">
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Basics</label></div>
                <label className="css-sidebar-link" onClick={() => change_page(1)}>Buttons</label>
                <label className="css-sidebar-link">Images</label>
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Navigation</label></div>
                <label className="css-sidebar-link">Top navbars</label>
                <label className="css-sidebar-link">Bottom navbars</label>
                <label className="css-sidebar-link">Side navbars</label>
                <label className="css-sidebar-link">Dropdowns</label>
                <label className="css-sidebar-link">Megamenus</label>
                <div className="css-sidebar-label-wrapper"><label className="css-sidebar-label">Windows</label></div>
                <label className="css-sidebar-link">Modals</label>
                <label className="css-sidebar-link">Popups</label>
            </div>

            <div className="css-content-wrapper">
                {(page === 1) ? <CSS_Buttons /> : null}
            </div>
        </div>
    )
}

export default CSS;