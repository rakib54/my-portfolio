import React from 'react';
import './Project.css'

const Project = ({project}) => {
    return (
        // <div className="col-md-4 col-sm-12 g-4 mt-5 text-center project">
        //     <img style={{height:'150px'}} src={project.image} className="img-fluid" alt=""/>
        //     <h4 style={{height:'40px'}} className="mt-4">{project.name}</h4>
        //     <div className="btn text-center justify-content-center mt-2">
        //     <a  className="ms-2" href={project.live} ><button>live</button></a>
        //     <a className="ms-2" href={project.Client} ><button>Client</button></a>
        //     <a className="ms-2" href={project.server} ><button>Server</button></a>
        //     </div>
        // </div>
        <div className="col-md-4 project d-flex justify-content-center text-center col-sm-6 col-lg-4 mt-5">
            <div className="card" style={{ width: '20rem' }}>
                <div className="inner">
                    <img style={{height:'200px'}} className="card-img-top" src={project.image} alt="Card image cap" />

                </div>
                <div className="card-body">
                    <h5 style={{height:'50px',color:'crimson'}} className="card-title text-center">{project.name}</h5>
                    <p style={{height:'200px',textAlign:'left'}} className="card-text">{project.description}</p>
                    <div className="mt-5">
                        <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-danger ms-2">Live</a>
                        <a href={project.Client} target="_blank" rel="noreferrer" className="btn btn-danger ms-2">Client</a>
                        {
                            project.server ? 
                            <a href={project.server} target="_blank" rel="noreferrer" className="btn btn-danger ms-2">Server</a>
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;