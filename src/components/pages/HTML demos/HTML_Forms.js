import { useState } from "react";

import MessageService from "../../../services/apicalls/messageService";

import "../../../css/pages/HTML demos/html_forms.css";

const HTML_Forms = () => {

    // Determines whether or not the user is allowed to send another message
    const [send, setSend] = useState(1);

    const send_message = async () => {
        if (send === 1) {
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let company = document.getElementById("company").value;
            let position = document.getElementById("position").value;
            let method = document.getElementById("method").value;
            let specify = document.getElementById("specify").value;
            let comments = document.getElementById("comments").value;
            if (name || phone || email || company || position || (method!=="other") || specify || comments) {
                await MessageService.post_message(name, phone, email, company, position, method, specify, comments);
                setSend(0);
                document.getElementById("submit").style.opacity="0.8";
                document.getElementById("submit").style.cursor="not-allowed";
            }
        }
    }

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
                        <input id="name" type="text" placeholder="name"></input>
                        <input id="phone" type="text" placeholder="phone#"></input>
                        <input id="email" type="text" placeholder="email"></input>
                        <input id="company" type="text" placeholder="company"></input>
                        <input id="position" type="text" placeholder="position"></input>
                    </div>
                </div>
                <p>How did you find out about this site?</p>
                <select id="method">
                    <option value="other">Other</option>
                    <option value="resume">My resume</option>
                    <option value="github">Github</option>
                    <option value="linkedin">LinkedIn</option>
                </select>
                <p>If other, feel free to specify: </p>
                <input type="text" id="specify"></input>
                <p>Anything else you would like to say. </p>
                <textarea type="text" id="comments"></textarea>
                <button onClick={send_message} id="submit">{(send === 0) ? "Message sent" : "Send message"}</button>
            </div>
        </div>
    )
}

export default HTML_Forms;