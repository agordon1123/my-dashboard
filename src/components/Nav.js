import React from 'react';

const Nav = props => {
    const { data } = props;

    return (
        <div className="nav-container">
            <img className="user-image" src={data.avatar_url} />
            {['DAILY', 'TASKS', 'MEMES', 'WEATHER'].map((el, i) => (
                <p className={`nav-item ${el.toLowerCase()}`} key={i}>{el}</p>
            ))}
        </div>
    );
};

export default Nav;
