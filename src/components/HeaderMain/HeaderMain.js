import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderMain.css'
import resume from '../../images/resume.pdf'


const HeaderMain = () => {
    return (
        <main style={{height:'500px'}}  className="row d-flex align-items-center home">
            
                <div className="col-md-12 col-sm-12  text-center">
                    <h1 className="name">HI ! I AM <span className="my-name">RAKIBUR RAHMAN</span></h1>
                    <h5>I am a Front End Developer</h5>
                    <p></p>
                    <a style={{position:'relative'}} href={resume} download="resume.pdf"><button><FontAwesomeIcon icon={faArrowDown}/>download cv</button></a>
                </div>
         
        </main>
    );
};

export default HeaderMain;