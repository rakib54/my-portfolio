import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from './Particle.config';


const Particle = () => {
    return (
        <div>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
};

export default Particle;