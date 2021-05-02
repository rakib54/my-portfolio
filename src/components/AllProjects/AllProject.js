import React from 'react';

const AllProject = ({ project }) => {
    return (
        <div className="col-md-4 col-sm-12 mt-5 text-center project">
            <img style={{ height: '150px' }} src={project.image} className="img-fluid" alt="" />
            <h4 style={{ height: '40px' }} className="mt-4">{project.name}</h4>
            <div className="btn text-center justify-content-center mt-2">
                <a className="ms-2" href={project.live} ><button>live</button></a>
                <a className="ms-2" href={project.Client} ><button>Client</button></a>
                <a className="ms-2" href={project.server} ><button>Server</button></a>
            </div>
        </div>

    );
};

export default AllProject;