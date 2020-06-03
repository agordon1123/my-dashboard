import React, { useState, useEffect } from 'react';

const Weather = props => {
    const { isDarkMode } = props;
    const [data, setData] = useState({});

    useEffect(() => {
        console.log('Weather mounted');
    }, []);

    return (
        <div className={isDarkMode ? 'Weather--dark' : 'Weather--light'}>
            <h3>WEATHER.JS</h3>
        </div>
    );
};

export default Weather;
