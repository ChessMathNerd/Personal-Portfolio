import { useState } from "react";

import "../../../css/pages/HTML demos/html_forms.css";

const HTML_Forms = () => {
    return (
        <div>
            <h1>Contact me</h1>
            <p>Found a bug? Got a suggestion? Want to connect? All information is optional and will be sent to me
                using NodeJS RESTful APIs. I am actively looking for ways to improve myself and this site. I am also looking for
                full-time employment in my field, so if you can help with any of those things, I would appreciate you taking the time to 
                send me something. Thanks!</p>
            <div className="html-forms-outer-wrapper">
                <div className="html-forms-inner-wrapper">
                    <div className="html-forms-labels">
                        <label>Name:</label>
                        <label>Phone:</label>
                        <label>Email:</label>
                        <label>Company:</label>
                        <label>Position:</label>
                    </div>
                    <div className="html-forms-inputs">
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="phone#"></input>
                        <input type="text" placeholder="email"></input>
                        <input type="text" placeholder="company"></input>
                        <input type="text" placeholder="position"></input>
                    </div>
                </div>
                <p>How did you find out about this site?</p>
                <select>
                    <option value="other">Other</option>
                    <option value="resume">My resume</option>
                    <option value="github">Github</option>
                    <option value="linkedin">LinkedIn</option>
                </select>
                <p>If other, feel free to specify: </p>
                <input type="text"></input>
                <p>Anything else you would like to say. </p>
                <textarea type="text"></textarea>
                <button>Send message</button>
            </div>
        </div>
    )
}

export default HTML_Forms;