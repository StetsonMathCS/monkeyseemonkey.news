import React from 'react';
import logo from './msm3.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={`/`}>
            <img src={logo} alt="Logo"></img>
        </Link>
    );
}

export default Logo