import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <p>test</p>
        </Link>
    );
}

export default ListItem;