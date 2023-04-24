import { useState } from "react";

import Constants from "../../services/utils/constants";

import "../../css/pages/skills.css";

const Skills = () => {

    // Array that controls whether certain paragraphs are showing or not
    // Only used to change the icons on the +/- buttons
    // 0: not shown
    // 1: shown
    const [para, setPara] = useState([0, 0, 0, 0, 0, 0, 0])

    const change_paragraph = (num) => {
        if (para[num] === 0) {
            document.getElementById("skill-paragraph-" + (num+1)).style.height = "unset";
        }
        else {
            document.getElementById("skill-paragraph-" + (num+1)).style.height = "0px";
        }
        let temp = [];
        for (let i = 0; i < para.length; i++) {
            if (i !== num) temp.push(para[i]);
            else temp.push((para[i] === 0) ? 1 : 0);
        }
        setPara([...temp]);
    }

    return (
        <div className="skill-wrapper">
            <h1>Skills and Projects</h1>
            <p>I have developed a collection of hard and soft skills over the course of my time as a student
                and in my personal efforts to become a better programmer. I continue to improve my skills, 
                and am always looking for new things to learn as well.
            </p>

            
            <div className="skill-header">
                <h2>Python</h2>
                <img src={(para[0] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(0)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-1">Python was the first programming language I was exposed to, at the age of 14, 
                and it was the language that made me choose
                to pursue a degree in computer programming. I have worked with it on and off since then, building video games and UI apps for 
                file editing (map building), among other things. I am very familiar with the python classes and objects and algorithms. Taking all my work with
                it together, I have about 3 years time of constantly working with the language. Below you can see a sample of some of the 
                work I have done with this language.  

            </p>


            <div className="skill-header">
                <h2>Java</h2>
                <img src={(para[1] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(1)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-2">Java is always my go-to language for any non-web related project, 
            whether it be networking, UI, file IO, or just algorithms and data manipulation. I have used this language frequently for the past 
            4 years, and am probably more comfortable with it than any other soft skill I have. Skills in this language include
            arrays and other data structures, classes, interfaces, inheritance, modular design, JavaFX, and some work with SQL and servlets. 
            I am also interested in learing the SpringBoot framework, but as of right now I have very little knowledge of it, and use java mostly 
            for non web-related application ideas.
            </p>

            <div className="skill-header">
                <h2>ReactJS</h2>
                <img src={(para[2] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(2)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-3">I am relatively new to ReactJS. I started learning it in early fall of 2022, 
            beginning in late September. However, I quickly learned the basics and was able to build a capstone project by the end of the semester, 
            with CSS, HTML, and NodeJS, all of which I also learned at the time. Since then, I have been working with it on almost a daily basis,
            learning better design strategies, and testing my skills by building new webapps such as this site, which was built entirely in it.
            <br/><br/>In February 2023, I competed with a team of two other students, to build a webapp for Kansas City Federal Bank's Annual Code-A-Thon.
            Each team had around 30 hours (including sleep), to build the project. 
            As the frontend programmer during this competition, I decided to build it using ReactJS. Out of 20 total teams, we placed 3rd statewide. 
            You can view the front-end source code <a href="https://github.com/iAmSamuelLuke/FRB-frontend-main/tree/PeterMorris">here</a>.
            </p>

            <div className="skill-header">
                <h2>Mathematics</h2>
                <img src={(para[3] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(3)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-4">
                In addition to my programming skills, I also have a Bachelor's degree in mathematics. This has been extremely useful since 
                math rigorously develops such skills as critical thinking, logic, analysis, and creativity, which are also
                very useful for coding. I have taken courses in calculus, 
                modern algebra, rings, groups, graphs, linear algebras, discrete mathematics, complex analysis, and statistical regression
                and probability. 
            </p>


            <div className="skill-header">
                <h2>Self starter</h2>
                <img src={(para[4] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(4)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-5">
                I have never taken any classes that taught HTML, JavaScript, ReactJS, or CSS programming. Everything I know about these languages
                I have learned on my own by using tools like youtube, w3schools, stack overflow, and google, coupled
                with lots and lots of self experimentation. Through these experiences, I have learned
                the value of determination, drive, and hard work, as well as how to teach myself when others cannot. This is very valuable as it 
                will allow me to more easily learn more new technologies.
            </p>

            <div className="skill-header">
                <h2>Active learning</h2>
                <img src={(para[5] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(5)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-6">
                I have a very good memory and the ability to internalize and use large amounts of information in a short period of time. 
                The best illustration of this occurred in 2011-2014. I became obsessed with mathematics and successfully completed math grades 3-12
                in under three years, with a 4.0 GPA. At the age of 12, I was enrolled in a college calculus course at UCM and passed with an A+ grade.
                An ideal job would allow me to use the skills I currently have, as well as learn new ones on a regular basis. A long term dream
                of mine is to become a senior expert developer in at least one or, if possible, two or three, programming languages or frameworks. 
            </p>

            <div className="skill-header">
                <h2>Other</h2>
                <img src={(para[6] === 0) ? Constants.circle_plus : Constants.circle_minus} 
                    alt="Not found" className="skill-icon-button" onClick={() => change_paragraph(6)}/>
            </div>
            <p className="skill-paragraph" id="skill-paragraph-7">
                My other skills include IDE experience with Intellij, Eclipse, and Visual Studio Code, my all time favorite IDE. I also have 
                limited experience with SQL querying, C# and C, postman, insomnia, git version control, github desktop, Microsoft visual studio.
                 Non technical skills include an average typing speed of around 80 WPM,
                and A+ grade writing, public speaking, and english skills through coursework. <br /><br /> I am also interested in adding to my 
                current skills. Interests include ruby on rails, ASP.NET, Angular, VueJS, and others. 
            </p>
        </div>
    )
}

export default Skills;