import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Nav = props => {
    const { data, isDarkMode, setIsDarkMode } = props;

    const handleToggle = (bool) => {
        setIsDarkMode(bool);
    }

    return (
        <div className={isDarkMode ? 'Nav--dark' : 'Nav--light'}>
            <img className="user-image" src={data.avatar_url} />
            <div className='nav-items'>
                {['DAILY', 'TASKS', 'MEMES', 'WEATHER'].map((el, i) => (
                    <p className={`nav-item ${el.toLowerCase()}`} key={i}>{el}</p>
                ))}
            </div>
            <div className='darkmode-buttons'>
                <FiSun
                    onClick={(() => handleToggle(false))}
                    style={isDarkMode === false ? { color: '#1DB954' } : { color: '#FFFFFF' }} 
                />
                <FiMoon
                    onClick={(() => handleToggle(true))}
                    style={isDarkMode === true ? { color: '#1DB954' } : { color: 'black' }} 
                />
            </div>
        </div>
    );
};

export default Nav;

// TOGGLE SWITCH
{/* <label className='switch'>
    <input type='checkbox' onChange={() => handleToggle()} />
    <span className='slider round' />
</label> */}
