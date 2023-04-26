import { useState } from "react";

import "../../../css/pages/CSS demos/css_navbars.css";

const CSS_Navbars = () => {
    return (
        <div className="css-navbar-page-wrapper">
            <h1>CSS Navigation Bars</h1>
            <h2 className="css-h2">Top navbars</h2>
            <div className="css-navbar-container">
                <div className="css-navbar-top">
                    <button className="cssdemo-navbar-button cssdemo-navbar-button-1">Nav 1</button>
                    <button className="cssdemo-navbar-button cssdemo-navbar-button-2">Nav 2</button>
                    <button className="cssdemo-navbar-button cssdemo-navbar-button-3">Nav 3</button>
                </div>
            </div>
        </div>
    )
}
export default CSS_Navbars;