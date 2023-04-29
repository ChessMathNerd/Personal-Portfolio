import { useState } from "react";

import "../../../css/pages/CSS demos/css_navbars.css";

const CSS_Navbars = () => {

    // Controls the text displayed in the first navbar
    const [nav1, setNav1] = useState("Click a button and I will change");
    // Controls the text displayed in the second navbar
    const [nav2, setNav2] = useState("Click a button and I will change");

    const nav_change = (num1, num2) => {
        if (num1 === 1) {
            setNav1("Link " + num2 + " clicked");
        }
        if (num1 === 2) {
            setNav2("Link " + num2 + " clicked");
        }
    }

    return (
        <div className="css-navbar-page-wrapper">
            <h1>CSS Navigation Bars</h1>
            <h2 style={{margin: "auto"}}>Completed week of 4/23/2023 - 4/29/2023</h2>
            <p>The demos on this page are designed for PC and some high definition tablets and iPads. Small mobile devices generally
                use pull-down and slide-in menus instead.
            </p>
            <h2 className="css-h2">Top navbars</h2>
            <p>Simple navbar.</p>
            <div className="css-navbar-container">
                <div className="css-navbar-top">
                    <button className="cssdemo-navbar-button cssdemo-navbar-button-1" onClick={() => nav_change(1, 1)}>Nav 1</button>
                    <button className="cssdemo-navbar-button cssdemo-navbar-button-2" onClick={() => nav_change(1, 2)}>Nav 2</button>
                    <button className="cssdemo-navbar-button cssdemo-navbar-button-3" onClick={() => nav_change(1, 3)}>Nav 3</button>
                </div>
                <h1>{nav1}</h1>
            </div>
            <p>Navbar with dropdown menus.</p>
            <div className="css-navbar-container">
                <div className="css-navbar-top">
                    <div className="css-navbar-dropdown">
                        <button className="css-dropdown-button">Nav 1</button>
                        <div className="css-dropdown-links">
                            <button onClick={() => nav_change(2, 1.1)}>Nav 1.1</button>
                            <button onClick={() => nav_change(2, 1.2)}>Nav 1.2</button>
                            <button onClick={() => nav_change(2, 1.3)}>Nav 1.3</button>
                        </div>
                    </div>
                    <div className="css-navbar-dropdown">
                        <button className="css-dropdown-button">Nav 2</button>
                        <div className="css-dropdown-links">
                            <button onClick={() => nav_change(2, 2.1)}>Nav 2.1</button>
                            <button onClick={() => nav_change(2, 2.2)}>Nav 2.2</button>
                            <button onClick={() => nav_change(2, 2.3)}>Nav 2.3</button>
                        </div>
                    </div>
                </div>
                <h1>{nav2}</h1>
            </div>
        </div>
    )
}
export default CSS_Navbars;