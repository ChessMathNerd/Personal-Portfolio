import "../../css/pages/welcome.css";

const Welcome = () => {
    return (
        <div className="welcome-wrapper">
            <h1>Welcome to my personal portfolio page</h1>
            <p>This website contains code samples of various types written in a ReactJS environment using modern and 
            responsive CSS, HTML, and JavaScript.
            I certify that all the samples contained here were programmed by me
            and me alone, and are representative of the skills that I have learned.</p>
            <p>The menu at the left will open a navbar that you can use to navigate the site, 
                learn more about me, or see how this website was built. The navbar at top
                will direct you to CSS, HTML, or JavaScript demos and examples.
            </p>
        </div>
    )
}

export default Welcome;