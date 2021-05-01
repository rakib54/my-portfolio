import React from 'react';
import SendEmail from '../SendEmail/SendEmail';
import Footer from '../Footer/Footer';

const Skills = () => {
    return (
        <section className="container mt-5">
            <div>
                <h2 style={{color:'crimson'}}>Skills</h2>
                <p><b>Programming language :</b> C , C++, Java , Javascript</p>
                <p><b>Front End:</b> Html5, Css3 , Javascript ES6, ES5 ,React, Firebase, Bootstrap, Material UI</p>
                <p><b>Back End:</b> Node js , Express js</p>
                <p><b>Database:</b> Mongodb , Mysql</p>
                <p><b>Tools:</b> VsCode , Netlify, Heroku, Dev tools,Github, Firebase</p>
            </div>
            <SendEmail></SendEmail>
            
        </section>
    );
};

export default Skills;