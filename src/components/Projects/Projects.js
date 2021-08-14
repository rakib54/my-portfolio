import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../images/car2.PNG'
import healthy from '../../images/healthy.PNG'
import Project from '../Project/Project';
import './Projects.css'
import JobHunter from '../../images/jobHunter.PNG'



const projectData = [
    {
        id: '1',
        name: 'Car-Station',
        image: car,
        live: 'https://car-service-f8b0a.web.app/',
        Client: 'https://github.com/rakib54/Car-Station',
        server: 'https://github.com/rakib54/Car-station-server',
        description: <ul>
            <li>Utilized users booking service for their cars with payment gateway.</li>
            <li>Implemented CRUD operation, firebase authentication, react hook form, react-router.</li>
            <li><b>Tools:</b>React,JS,Mongodb, Firebase,Node Js, Express Js.</li>
        </ul>
    },
    {
        id: '2',
        name: 'JOB Hunter',
        image: JobHunter,
        live: 'https://jobs-hunter-2cde0.web.app/',
        Client: 'https://github.com/rakib54/JobHunter-Client',
        server: 'https://github.com/rakib54/JobHunter-server',
        description: <ul>
            <li>Implemented Job Website where Job Seeker can apply for their Job with resume.</li>
            <li>Utilized firebase authentication and validation for User, Admin and Employee.</li>
            <li><b>Tools:</b>React,Mongodb, Firebase,Node Js, Express Js.</li>
        </ul>

    },
    {
        id: '3',
        name: "Healthy Treats",
        image: healthy,
        live: 'https://healthy-treats-ce35b.web.app/',
        Client: 'https://github.com/rakib54/Healthy-Treats',
        server: 'https://github.com/rakib54/Healthy-treats-server',
        description: <ul>
            <li>Implemented user’s orders system from the website.</li>
            <li>Performed CRUD operations and implemented by the Admin.</li>
            <li><b>Tools:</b>React,JS,Mongodb, Firebase,Node Js, Express Js.</li>
        </ul>

    }

]

const Projects = () => {
    return (
        <div style={{ position: 'relative' }} className="mt-5 container">
            <h2 style={{ color: 'rgb(209, 41, 74)', fontWeight: 'bolder' }} className="text-center">Top <span >Projects</span></h2>
            <div className="row">
                {
                    projectData.map(project => <Project project={project} key={project.id}></Project>)
                }
            </div>
            <div className="text-center mt-5 see">
                <Link to="/projects"><button>See more <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></button></Link>
            </div>
        </div>
    );
};

export default Projects;