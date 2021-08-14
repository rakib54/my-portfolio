import React from 'react';
import Navbar from '../Navbar/Navbar';
import AllProject from './AllProject';
import car from '../../images/car2.PNG'
import healthy from '../../images/healthy.PNG'
import sports from '../../images/sports.PNG'
import messenger from '../../images/native1.PNG'
import social from '../../images/social.PNG'
import JobHunter from '../../images/jobHunter.PNG'
import Footer from '../Footer/Footer';


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
            <li><b>Tools:</b> React,Rest API, Mongodb, Firebase, Node Js, Express Js.</li>  
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
        name: 'Healthy Treats',
        image: healthy,
        live: 'https://healthy-treats-ce35b.web.app/',
        Client: 'https://github.com/rakib54/Healthy-Treats',
        server: 'https://github.com/rakib54/Healthy-treats-server',
        description:<ul>
        <li>Implemented user’s orders system from the website.</li>
        <li>Performed CRUD operations and implemented by the Admin.</li>
        <li><b>Tools:</b> React, Mongodb, Firebase,Node Js, Express Js.</li>  
        </ul>
    },
    {
        id: '4',
        name: 'Native Messenger',
        image: messenger,
        live: '',
        Client: 'https://github.com/rakib54/native-messenger',
        description:<ul>
            <li>Implemented User Authentication with firebase.</li>
            <li>User can create group and chat each other.</li>
            <li><b>Tools:</b> React Native, Expo, firebase.</li>  
        </ul>
    },
    {
        id: '5',
        name: 'Social App',
        image: social,
        live: 'https://thirsty-borg-dab2ed.netlify.app/',
        Client: 'https://github.com/rakib54/social-app-client',
        server: 'https://github.com/rakib54/Social-app-server',
        description:<ul>
            <li>Implemented user interface applying React and Redux.</li>
            <li>User can add multiple posts or delete posts.</li>
            <li><b>Tools:</b> React, Redux, Express JS, MongoDB</li>  
        </ul>
    },
    {
        id: '6',
        name: 'Sports World',
        image: sports,
        live: 'https://all-sports-leagues.netlify.app/',
        Client: 'https://github.com/rakib54/All-Sports-leagues',
        server: '',
        description:<ul>
        <li> Utilized every Sports history around the world.</li>
        <li>User can see Sports history.</li>
        <li><b>Tools:</b>React,JavaScript,React router, API</li>  
        </ul>
    }
]

const AllProjects = () => {
    return (
        <main>
            <div>
                <Navbar></Navbar>
            </div>

            <div style={{position:'relative'}} className="mt-5 container">
                <h2 style={{ color: 'rgb(209, 41, 74)', fontWeight: 'bolder' }} className="text-center">ALL <span >Projects</span></h2>
                <div style={{ position: 'relative' }} className="row">
                    {
                        projectData.map(project => <AllProject project={project} key={project.id}></AllProject>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
};

export default AllProjects;