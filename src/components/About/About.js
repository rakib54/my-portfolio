import React from 'react';
import Navbar from '../Navbar/Navbar';
import SendEmail from '../SendEmail/SendEmail';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <main>
           <div>
                <Navbar></Navbar>
           </div>
           <div style={{position:'relative'}} className="container">
                <SendEmail></SendEmail>
           </div>
           <div>
               <Footer></Footer>
           </div>
        </main>
    );
};

export default About;