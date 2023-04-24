import "../../css/pages/about.css";

const About = () => {
    return (
        <div>
            <h1>About this website</h1>
            <p>This site was programmed in ReactJS, using functional components, and utilizing CSS3, NodeJS, and HTML5. 
                It was initialized using create-react-app, and has been hosted for free using AWS cloud services.</p>
            <p>The backend is hosted with MongoDB cloud technology, and is connected to a MongoDB database as well. 
                The two can communicate using JSON and rest API endpoints that I created using NodeJS.</p>
            <p>The latest committed version of the source code can be access via
                github <a href="https://github.com/ChessMathNerd/Personal-Portfolio">here</a>.
            </p>
            <p>This website does not currently have full support for mobile devices, although I am working on that.
                The entire system architecture has been designed, developed, tested, and maintained by me. No CSS frameworks, like 
                Ant, Material UI, or Bootstrap, were used. 
            </p>
        </div>
    )
}

export default About;