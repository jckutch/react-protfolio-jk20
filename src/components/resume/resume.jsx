import React from "react";
import resume from "../../Assets/resume/resumejk.pdf";

const Resume = () => {
    return (
        <div class="card text-center bg-dark text-white">
            <div class="card-header">
                <h1>&#128195; RESUME &#128220;</h1>
            </div>
            <div class="card-body">
                <h4 class="card-title">Aptitudes</h4>
                <p class="card-text">
                    I studied International Affairs and Economics at Florida State University. 
                    <br />
                    Knowledgeable in international business, within manufacturing for military, aerospace and phamaceutical industries, focused on cGMP, MIL spec, and AS9100 manufacturing practices.
                    <br />
                    <br />
                    Currently I'm learning Full-Stack Web Development, specialized in JavaScript, HTML, CSS, APIs (web,third-party and server-side), OOP, NodeJS, ExpressJS, SQL, ORM, NoSQL, React and MERN.
                    <br />
                    Studying at University of Central Florida <strong>CODING BOOTCAMP</strong>
                </p>
            </div>
            <div class="card-footer text-white d-grid gap-2 col-6 mx-auto">
                <h6>If you want more details, click the button below to download my <strong>RESUME</strong></h6>
                <a href={resume} class="btn btn-primary" download="resumejk.pdf">Download Resume</a>
            </div>
        </div>
    )
}

export default Resume