import React from 'react';
import car from '../../images/car.PNG'
import healthy from '../../images/healthy.PNG'
import Project from '../Project/Project';

const projectData =[
    {
        id:'1',
        name:'Car-Station',
        image:car,
        live:'https://car-service-f8b0a.web.app/',
        Client:'https://github.com/rakib54/Car-Station',
        server:'https://github.com/rakib54/Car-station-server'
    },
    {
        id:'2',
        name:'Healthy Treats',
        image:healthy,
        live:'https://healthy-treats-ce35b.web.app/',
        Client:'https://github.com/rakib54/Healthy-Treats',
        server:'https://github.com/rakib54/Healthy-treats-server'
    },
    {
        id:'1',
        name:'All Sports league',
        image:car,
        live:'https://car-service-f8b0a.web.app/',
        Client:'https://github.com/rakib54/Car-Station',
        server:'https://github.com/rakib54/Car-station-server'
    }
]

const Projects = () => {
    return (        
        <div className="mt-5 container">
            <h2 style={{color:'rgb(209, 41, 74)',fontWeight:'bolder'}} className="text-center">My <span >Projects</span></h2>
            <div className="row">
                {
                    projectData.map(project =><Project project={project} key={project.id}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;