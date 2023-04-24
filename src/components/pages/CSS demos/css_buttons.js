import { useState } from "react";

import Constants from "../../../services/utils/constants";

import "../../../css/pages/CSS demos/css_buttons.css";

// Tasks
// Standard buttons - done
// Different shape buttons - done
// Pressable buttons - done
// Disabled/enabled buttons - done
// Image buttons - done
// Gradient background buttons - done
// Icon buttons? - done

const CSS_Buttons = () => {
    return (
        <div className="css-buttons-wrapper">
            <h1>CSS buttons</h1>
            <h2 className="css-h2">Simple buttons: hoverable, disabled</h2>
            <div className="css-buttons">
                <button className="css-standard css-standard-1 css-button">Button 1</button>
                <button className="css-standard css-standard-2 css-button">Button 2</button>
                <button className="css-standard css-standard-3 css-button">Button 3</button>
                <button className="css-standard css-standard-4 css-button">Disabled</button>
            </div>


            <h2 className="css-h2">Shaped buttons: rounded, pill-shaped, slanted</h2>
            <div className="css-buttons">
                <button className="css-shaped css-shaped-1 css-button">Button 1</button>
                <button className="css-shaped css-shaped-2 css-button"><span className="css-shaped-undo">Button 2</span></button>
                <button className="css-shaped css-shaped-3 css-button">Button 3</button>
            </div>


            <h2 className="css-h2">Pressable buttons: "clicked" appearance</h2>
            <div className="css-buttons">
                <button className="css-pressable css-pressable-1 css-button">Button 1</button>
                <button className="css-pressable css-pressable-2 css-button">Button 2</button>
                <button className="css-pressable css-pressable-3 css-button">Button 3</button>
            </div>


            <h2 className="css-h2">Image buttons: image zoom, shadow, text on image</h2>
            <div className="css-buttons">
                <button className="css-image css-image-1 css-button">
                    <div className="css-image-div">
                        <div className="css-image-div-text">Castle 1</div>
                    </div>
                    <div className="css-image-wrapper"><img className="css-image-1-img" src={Constants.castle_1} alt=""/></div>
                </button>
                <button className="css-image css-image-3 css-button">
                    <img className="css-image-3-img" src={Constants.mountain_1} alt=""/>  
                    <div className="css-image-text">Mountain</div>
                </button>
                <button className="css-image css-image-2 css-button">
                    <div className="css-image-wrapper"><img className="css-image-2-img" src={Constants.castle_2} alt=""/></div>
                    <div className="css-image-div">
                        <div className="css-image-div-text">Castle 2</div>
                    </div>
                </button>
            </div>


            <h2 className="css-h2">Special buttons: blended color, icon buttons</h2>
            <div className="css-buttons">
                <button className="css-special-gradient css-special-gradient-1 css-button">Button 1</button>
                <button className="css-special-gradient css-special-gradient-2 css-button">Button 2</button>
                <button className="css-special-gradient css-special-gradient-3 css-button">Button 3</button>
            </div>
            <div className="css-buttons">
                <button className="css-special-icon css-special-icon-1 css-button" title="home">
                    <div className="css-special-icon-wrap">
                        <img className="css-special-icon-img" src={Constants.home_icon} alt="" />
                        <div className="css-special-icon-text">Home</div>
                    </div>
                </button>
                <button className="css-special-icon css-special-icon-2 css-button" title="find">
                    <div className="css-special-icon-wrap">
                        <img className="css-special-icon-img" src={Constants.find_icon} alt="" />
                        <div className="css-special-icon-text">Find</div>
                    </div>
                </button>
                <button className="css-special-icon css-special-icon-3 css-button" title="delete">
                    <div className="css-special-icon-wrap">
                        <img className="css-special-icon-img" src={Constants.delete_icon} alt="" />
                        <div className="css-special-icon-text">Delete</div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default CSS_Buttons;