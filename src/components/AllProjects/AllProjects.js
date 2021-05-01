import React from 'react';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const AllProjects = () => {
    return (
        <main>
            <div>
                <Navbar></Navbar>
            </div>
            <div >
                <Projects></Projects>
            </div>
        </main>
    );
};

export default AllProjects;