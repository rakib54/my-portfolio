import React from 'react';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>  
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;