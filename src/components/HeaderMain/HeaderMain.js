import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderMain.css'
import resume from '../../images/Rakibur_Rahman_resume.pdf'
// import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const HeaderMain = () => {
    return (
        <main style={{ height: '500px' }} className="row d-flex align-items-center home">

            <div className="col-md-12 col-sm-12  text-center">
                <h1 className="name">HI ! I AM <span className="my-name">RAKIBUR RAHMAN</span></h1>
                <h5>I am a Front End Developer</h5>
                <p></p>
                <a style={{ position: 'relative' }} href={resume} download="Rakibur_Rahman_resume.pdf"><button><FontAwesomeIcon icon={faArrowDown} />download cv</button></a>
                {/* <div style={{color:'white'}} className="d-flex justify-content-center mt-3">
                <a href="https://github.com/rakib54" target="_blank" rel="noreferrer"><FontAwesomeIcon className="ms-3" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/rakibur74/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon ms-3" icon={faLinkedinIn} /></a>
                <a href="https://twitter.com/rakibur74" target="_blank" rel="noreferrer"><FontAwesomeIcon className="ms-3" icon={faTwitter} /></a>
                </div> */}
            </div>

        </main>
    );
};

export default HeaderMain;