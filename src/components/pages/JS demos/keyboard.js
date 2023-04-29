import {useState} from "react";

import Constants from "../../../services/utils/constants";

import "../../../css/pages/JS demos/keyboard.css";

const KeyBoard = (props) => {

    // Controls whether the keybaord is in upper case at the moment
    const [up, setUp] = useState(false);

    const type = (char) => {
        let text = document.getElementById("textarea").value;
        if (char) {
            text += char;
            document.getElementById("textarea").value = text;
            document.getElementById("textarea").focus();
        }
        else {
            text = text.substring(0, ((text.length - 1 > 0) ? text.length - 1 : 0));
            document.getElementById("textarea").value = text;
            document.getElementById("textarea").focus();
        }
    }

    const set_case = () => {
        if (up) setUp(false);
        else setUp(true);
    }

    return (
        <div>
            <div className="keyboard-wrapper"> 
                <h1>Online keyboard</h1>
                <h2 style={{margin: "auto"}}>Completed week of 4/23/2023 - 4/29/2023</h2>
                <div className="keyboard-ta-wrapper">
                    <textarea className="keyboard-ta" id="textarea" autoFocus></textarea>
                </div>
                <div className="keyboard-core-wrapper">
                    <div className="keyboard-core-layer-1 keyboard-core-layer">
                        <button className="keyboard-key-1" onClick={() => type(up ? "!" : "1")}>{up ? "!" : "1"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "@" : "2")}>{up ? "@" : "2"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "#" : "3")}>{up ? "#" : "3"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "$" : "4")}>{up ? "$" : "4"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "%" : "5")}>{up ? "%" : "5"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "^" : "6")}>{up ? "^" : "6"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "&" : "7")}>{up ? "&" : "7"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "*" : "8")}>{up ? "*" : "8"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "(" : "9")}>{up ? "(" : "9"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? ")" : "0")}>{up ? ")" : "0"}</button>
                    </div>
                    <div className="keyboard-core-layer-2 keyboard-core-layer">
                        <button className="keyboard-key-1" onClick={() => type(up ? "Q" : "q")}>{up ? "Q" : "q"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "W" : "w")}>{up ? "W" : "w"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "E" : "e")}>{up ? "E" : "e"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "R" : "r")}>{up ? "R" : "r"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "T" : "t")}>{up ? "T" : "t"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "Y" : "y")}>{up ? "Y" : "y"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "U" : "u")}>{up ? "U" : "u"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "I" : "i")}>{up ? "I" : "i"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "O" : "o")}>{up ? "O" : "o"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "P" : "p")}>{up ? "P" : "p"}</button>
                    </div>
                    <div className="keyboard-core-layer-3 keyboard-core-layer">
                        <button className="keyboard-key-1" onClick={() => type(up ? "A" : "a")}>{up ? "A" : "a"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "S" : "s")}>{up ? "S" : "s"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "D" : "d")}>{up ? "D" : "d"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "F" : "f")}>{up ? "F" : "f"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "G" : "g")}>{up ? "G" : "g"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "H" : "h")}>{up ? "H" : "h"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "J" : "j")}>{up ? "J" : "j"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "K" : "k")}>{up ? "K" : "k"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "L" : "l")}>{up ? "L" : "l"}</button>
                    </div>
                    <div className="keyboard-core-layer-4 keyboard-core-layer">
                        <button className="keyboard-key-2" onClick={set_case}>
                            <img className="keyboard-caps-icon" src={Constants.caps_icon} alt=""></img>
                        </button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "Z" : "z")}>{up ? "Z" : "z"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "X" : "x")}>{up ? "X" : "x"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "C" : "c")}>{up ? "C" : "c"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "V" : "v")}>{up ? "V" : "v"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "B" : "b")}>{up ? "B" : "b"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "N" : "n")}>{up ? "N" : "n"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "M" : "m")}>{up ? "M" : "m"}</button>
                        <button className="keyboard-key-2" onClick={() => type()}>
                            <img className="keyboard-backspace-icon" src={Constants.backspace_icon} alt=""></img>
                        </button>
                    </div>
                    <div className="keyboard-core-layer-5 keyboard-core-layer">
                        <button className="keyboard-key-1" onClick={() => type(up ? "!" : "1")}>{up ? "!" : "1"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "!" : "!")}>{up ? "!" : "!"}</button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "?" : "?")}>{up ? "?" : "?"}</button>
                        <button className="keyboard-key-4" onClick={() => type(up ? " " : " ")}>
                            <img className="keyboard-spacebar-icon" src={Constants.spacebar_icon} alt=""></img>
                        </button>
                        <button className="keyboard-key-1" onClick={() => type(up ? "." : ".")}>{up ? "." : "."}</button>
                        <button className="keyboard-key-3" onClick={() => type(up ? "\n" : "\n")}>
                            <img className="keyboard-enter-icon" src={Constants.newline_icon} alt=""></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyBoard;