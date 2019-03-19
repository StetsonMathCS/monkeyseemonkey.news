import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
        <div className = "container mx-auto bg-blue-darkest" >
             <p>test</p>
        </div>
        </Link>
    );
}

export default ListItem;