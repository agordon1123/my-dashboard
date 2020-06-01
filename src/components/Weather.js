import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log('Weather mounted');
    }, []);

    return (
        <div className='weather-container'>
            <h3>WEATHER.JS</h3>
        </div>
    );
};

export default Weather;
