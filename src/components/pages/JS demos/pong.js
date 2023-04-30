import { useEffect, useState } from "react";



import "../../../css/pages/JS demos/pong.css";

const Pong = () => {

    // Controls whether the game is being played or not
    const [playing, setPlaying] = useState(false);
    const [lost, setLost] = useState(false);
    // Controls the direction of the ball
    // 1 = down, right
    // -1 = up, left
    const [bdx, setBdx] = useState(1);
    const [bdy, setBdy] = useState(1);
    // The ball's coordinates
    const [bx, setBx] = useState(0);
    const [by, setBy] = useState(0);

    const game_loop = useEffect(() => {
        setTimeout(() => {
            if (playing && (!lost)) {
                try {
                    // update ai paddle
                    let stopper = false;
                    let height = getComputedStyle(document.querySelector(".pong-canvas")).height;
                    height = (Number)(height.substring(0, height.length - 2));
                    // if ((((ai_paddle_pos + 84) > height) && (dx === 1)) || ((ai_paddle_pos < 4) && (dx === -1))) {
                    //     setDx(-dx);
                    // }
                    // setAI_paddle_pos(ai_paddle_pos + (4*dx));
                    // document.getElementById("ai-paddle").style.transform = `translate(0, ${ai_paddle_pos}px)`;

                    // update ball
                    let temp = getComputedStyle(document.querySelector(".pong-canvas"))
                    let width = temp.width;
                    width = (Number)(width.substring(0, width.length - 2));
                    // vertical wall collision
                    if (((by+30+4>height) && bdy === 1) || ((by+4 < 4) && bdy === -1)) {
                        setBdy(-bdy);
                    }
                    // horizontal wall collision
                    if (((bx+30+4>width) && bdx === 1) || ((bx < 4) && bdx === -1)) {
                        setBdx(-bdx);
                        setLost(true);
                        stopper = true;
                        // setPlaying(false);
                    }
                    // collision with the player's paddle
                    let top = getComputedStyle(document.querySelector(".pong-paddle-player")).top;
                    top = (Number)(top.substring(0, top.length - 2));
                    if ((bdx === 1) && (Math.abs(top+40 - (by+15)) <= 50) && (bx+30+12+2>width)) {
                        setBdx(-bdx);
                        console.log("player blocked!");
                    }
                    // collision with the ai's paddle
                    if ((bdx === -1) && (Math.abs(top+40 - (by+15)) <= 50) && (bx<12+2)) {
                        setBdx(-bdx);
                        console.log("ai blocked!");
                    }

                    setBx(bx + (4*bdx));
                    setBy(by + (4*bdy));
                    document.getElementById("ball").style.transform = `translate(${bx}px, ${by}px)`;

                    document.onmousemove = (e) => {
                        e = e || window.event;
                        e.preventDefault();
                        try {
                            let temp = e.clientY - 50 - 40;
                            temp = Math.max(0, temp);
                            temp = Math.min(temp, height - 80);
                            document.getElementById("player-paddle").style.top = (temp) + "px";
                            document.getElementById("ai-paddle").style.top = (temp) + "px";
                        }
                        catch (e) {}
                        e.stopPropagation();
                    }
                    if (stopper) document.onmousemove = null;
                }
                catch (e) {}
            }
        }, 5)
    });

    // window.addEventListener('mousemove', (event) => {
    //     console.log(event.clientY);
    // })

    const start = async () => {
        setPlaying(true);
        setLost(false);
    }

    const try_again = () => {
        setPlaying(false);
    }

    return (
        <div>
            <div className="pong-wrapper">
                <div className="pong-canvas" id="pong-canvas">
                    <button className="pong-start-button" style={{visibility: playing ? "hidden" : "visible"}}
                        onClick={start}>Start!</button>
                    <button className="pong-start-button" style={{visibility: (playing && lost) ? "visible" : "hidden"}}
                        onClick={try_again}>Try again</button>
                    <div className="pong-paddle-ai" id="ai-paddle"></div>
                    <div className="pong-paddle-player" id="player-paddle"></div>
                    <div className="pong-ball" id="ball" style={{visibility: (!playing) ? "hidden" : "visible"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Pong;