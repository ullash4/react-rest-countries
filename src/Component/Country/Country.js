import React from 'react';
import './Country.css'

const Country = ({name, region, area}) => {
    return (
        <div className='main'>
            <h1>Country name: {name}</h1>
            <h1>Region name: {region}</h1>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;