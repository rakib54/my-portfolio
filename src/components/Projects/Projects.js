import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../images/car.PNG'
import healthy from '../../images/healthy.PNG'
import Project from '../Project/Project';
import './Projects.css'
import sports from '../../images/sports.PNG'


const projectData = [
    {
        id: '1',
        name: 'Car-Station',
        image: car,
        live: 'https://car-service-f8b0a.web.app/',
        Client: 'https://github.com/rakib54/Car-Station',
        server: 'https://github.com/rakib54/Car-station-server'
    },
    {
        id: '2',
        name: 'Healthy Treats',
        image: healthy,
        live: 'https://healthy-treats-ce35b.web.app/',
        Client: 'https://github.com/rakib54/Healthy-Treats',
        server: 'https://github.com/rakib54/Healthy-treats-server'
    },
    {
        id: '3',
        name: 'Sports World',
        image: sports,
        live: 'https://all-sports-leagues.netlify.app/',
        Client: 'https://github.com/rakib54/All-Sports-leagues',
        server: ''
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