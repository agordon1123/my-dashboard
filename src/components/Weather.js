import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = props => {
    const { isDarkMode } = props;
    const [data, setData] = useState({});
    const apiUrl = process.env.REACT_APP_WEATHER_API_BASE_URL;
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const iconUrl = 'http://openweathermap.org/img/wn/';
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    // TODO: set to localStorage
    // const zip = process.env.REACT_APP_WEATHER_API_ZIPCODE;
    // TODO: convert zipcode to lat/long w/ external API
    // https://www.zipcodeapi.com/API#zipToLoc
    const lat = 32.895950;
    const lon = -80.003400;

    useEffect(() => {
        console.log("got fucked");
        axios
            .get(`${apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`)
            .then(res => {
                setData({
                    ...data,
                    current: res.data.current,
                    forecast: res.data.daily
                });
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className={isDarkMode ? 'Weather--dark' : 'Weather--light'}>
            {Object.keys(data).length ? (
                <>
                    <div className='current-img-container'>
                        <img src={`${iconUrl}${data.current.weather[0].icon}@2x.png`} alt='weather-forecast-item' />
                    </div>
                    <div className='weather-details'>
                        <h3>{Math.round(data.current.temp)}°</h3>
                        <p>{data.current.weather[0].main}</p>
                        <p>Feels like: {Math.round(data.current.feels_like)}°</p>
                        <p>Humidity: {data.current.humidity}%</p>
                        <p>Wind: {data.current.wind_speed}mph</p>
                    </div>
                    <div className='weather-forecast'>
                        {[1, 2, 3, 4].map(el => (
                                <div className='forecast-day' key={el}>
                                    <p>{days[new Date(data.forecast[el].dt * 1000).getDay()]}</p>
                                    <img src={`${iconUrl}${data.forecast[el].weather[0].icon}@2x.png`} alt='weather-forecast-item' />
                                    <p>{Math.round(data.forecast[el].temp.day)}°</p>
                                </div>
                            )
                        )}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Weather;
