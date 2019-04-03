import React from 'react';
import logo from './msm3.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={`/`} className="pb-0">
            <img src={logo} alt="Logo" clasName="pb-0"/>
        </Link>
    );
}

export default Logo