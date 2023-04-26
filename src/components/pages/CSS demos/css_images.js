import { useState } from "react";

import Constants from "../../../services/utils/constants";

import "../../../css/pages/CSS demos/css_images.css";

// Tasks
// Standard images, profile images
// Live image editor, zoom in/out, translate up/down/left/right, rotate left/right
const CSS_Images = () => {
    let root = document.querySelector(":root");
    let root_style = getComputedStyle(root);

    return (
        <div>
            {root_style.getPropertyValue("--mouse-x") + 10}
        </div>
    )
}

export default CSS_Images;