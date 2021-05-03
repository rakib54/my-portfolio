import React from 'react';
import Navbar from '../Navbar/Navbar';
import AllProject from './AllProject';
import car from '../../images/car.PNG'
import healthy from '../../images/healthy.PNG'
import sports from '../../images/sports.PNG'
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
            <li>Customer can book their service for washing or mechanics.</li>
            <li> Admin and customer have different dashboard.</li>
            <li><b>Tools:</b>React,JS,Mongodb, Firebase,Node Js, Express Js.</li>  
            </ul>
    },
    {
        id: '2',
        name: 'Healthy Treats',
        image: healthy,
        live: 'https://healthy-treats-ce35b.web.app/',
        Client: 'https://github.com/rakib54/Healthy-Treats',
        server: 'https://github.com/rakib54/Healthy-treats-server',
        description:<ul>
        <li>E-commerce Site where customer can buy their necessary items</li>
        <li> Need to Authenticate first</li>
        <li><b>Tools:</b>React,JS,Mongodb, Firebase,Node Js, Express Js.</li>  
        </ul>
    },
    {
        id: '3',
        name: 'All Sports league',
        image: car,
        live: 'https://car-service-f8b0a.web.app/',
        Client: 'https://github.com/rakib54/Car-Station',
        server: 'https://github.com/rakib54/Car-station-server',
        description:<ul>
            <li>All the Sports league are available here</li>
            <li>All leagues have different history</li>
            <li><b>Tools:</b>React,JavaScript,React router,API</li>  
        </ul>
    },
    {
        id: '4',
        name: 'Sports World',
        image: sports,
        live: 'https://car-service-f8b0a.web.app/',
        Client: 'https://github.com/rakib54/Car-Station',
        server: '',
        description:<ul>
        <li>Sports history around the world are available</li>
        <li>you can see their history.</li>
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