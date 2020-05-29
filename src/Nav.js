import React from 'react';

const Nav = props => {
    const { data } = props;

    return (
        <div className="nav-container">
            <img className="user-image" src={data.avatar_url} />
            <p>Daily</p>
            <p>Tasks</p>
        </div>
    );
};

export default Nav;