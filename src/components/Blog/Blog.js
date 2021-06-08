import React from 'react';
import Navbar from '../Navbar/Navbar';
import blog1 from '../../images/blog1.PNG'
import './Blog.css'
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <main className="blog">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="blog container">
                <div className="col-md-12">
                    <div className="col-md-6 mt-4">
                        <img style={{ height: '300px' }} src="https://miro.medium.com/max/1838/1*6ahbWjp_g9hqhaTDSJOL1Q.png" alt="" />
                        <h3>JavaScript developer should know!</h3>
                        <p><b>Try Catch:</b> When we are writing a code we never thought about an error [most of the new developers like me]. Try catch could save us from crashing our sites. When you writing a function inside try block, even if the code is not working or generates an error your website is not crash. because the catch can handle the error...</p>
                        <a href="https://rakibur74.medium.com/javascript-developer-should-know-ad73fa59315b" target="_blank" rel="noopener noreferrer">read more</a>
                    </div>

                    <div className="col-md-6 mt-5">
                        <img style={{ height: '300px' }} src="https://developers.redhat.com/sites/default/files/blog/2020/04/React-logo.png" alt="" />
                        <h3>React core concepts you should know!</h3>
                        <p><b>What is React? library or framework?</b></p>
                        <p>React is an open-source JavaScript library, not a framework. People might think that react is a framework. A framework is a complete package that you don’t need to install external resources. But in react you can use the third-party library that you need to build your application...</p>
                        <a href="https://rakibur74.medium.com/" target="_blank" rel="noopener noreferrer">read more</a>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </main>
    );
};

export default Blog;