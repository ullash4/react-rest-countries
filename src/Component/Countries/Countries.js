import './Countries.css'

import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello from Countries component</h1>
            {
                countries.map(country=> <Country name={country.name.common} region={country.region} area={country.area}></Country>)
            }
        </div>
    );
};

export default Countries;