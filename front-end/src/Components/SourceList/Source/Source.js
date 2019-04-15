import React from 'react';
import '../SourceList.css';

const Source = ({title, publisher, date, titleLink}) => {
    return (
        <tr>
            <th> <a href={titleLink}>{title}</a> </th>
            <th> {publisher} </th>
            <th> {date} </th>
        </tr>
    );
}

export default Source
