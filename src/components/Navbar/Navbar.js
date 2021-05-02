import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light  navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand ms-4 text-white" href="#">RAKIBUR RAHMAN</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link ms-5 active text-white" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link ms-5 active text-white" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link ms-5 active text-white" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link ms-5 active text-white" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link ms-5 active text-white" href="#">Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;