import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light  navbar">
            <div className="container-fluid">
                <a className="navbar-brand ms-4 text-white" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-5 active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 active text-white" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 active text-white" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 active text-white" href="#">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;