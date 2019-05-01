import React from 'react';
import logo from '../Images/msm3.png';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
         <Link to={`/`} className="pb-0">
            <img id="logo" src={logo} alt="Logo" className="pb-0"/>
        </Link>
    );
}

export default Logo