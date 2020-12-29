import React from "react";


const Container = () => {
    return (
        <div className="text-container">
            <p id="name">Irene Novelo</p>
            <p>Full Stack Web Developer</p>
            <div className="about-container">
                <img src="irene.jpg" alt="Profile Photo" />
                <div className="about-text">
                    <p id="aboutme">About Me</p>
                    <p id="text-title">Full Stack Web Developer</p>
                    <p>I am a web developer that works with html, css, Javascript, API's and Node</p>
                    <p>You can click on the links below to preview a few projects in my porfolio.</p>
                </div>
            </div>
        </div>


    )
}

export default Container