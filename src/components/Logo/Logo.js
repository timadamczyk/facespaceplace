import React from 'react';
import Tilt from 'react-tilt';
import BaldisariHead from './BaldisariHead.png';
import dot from './dot.png'
import './Logo.css';

const Logo = () => {
    return (
        
        <div className=" ma2 mt0 pa3">
        <Tilt className="Tilt" options={{ max : 75 }} style={{ height: 200, width: 200 }} >
        <div className="Tilt-inner pa3 ">
        <img className="w-100" alt='logo' src={dot} />
        </div>
        </Tilt>
        </div>
    );
}

export default Logo;