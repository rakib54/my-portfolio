import React from 'react';
import Navbar from '../Navbar/Navbar';
import myself from '../../images/myself2.jpg'
import './Contact.css'
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <main >
            <Navbar></Navbar>
            <section className="container contact">
                <div className="row mt-5">
                    <div className='col-md-6'>
                        <img className="img-fluid" style={{ height: '450px' }} src={myself} alt="" />
                    </div>
                    <div style={{position:'relative'}} className="col-md-6 mt-3 col-sm-6">
                        <h2>Rakibur Rahman</h2>
                        <h5>Front End Developer</h5>
                        <br/>
                        <p><b>Email:</b> rakibur74@gmail.com</p>
                        <p><b>phone:</b> 01779545426</p>
                        <p><b>Age:</b> 24</p>
                        <p><b>my website :</b><a href="https://github.com/rakib54" target="_blank" rel="noopener noreferrer">www.rakibur74.com</a></p>
                        <h6><b>Education:</b> BSc in Computer Science.</h6>
                        <h5>American International University Bangladesh</h5>
                    </div>
                    
                </div>
                
            </section>
            <Skills></Skills>
            <Footer></Footer>
        </main>
    );
};

export default Contact;