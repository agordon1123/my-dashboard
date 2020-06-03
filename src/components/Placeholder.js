import React from 'react';

const Placeholder = props => {
    const { isDarkMode } = props;

    return (
        <div className={isDarkMode ? 'Placeholder--dark' : 'Placeholder--light'}>
            <h3>PLACEHOLDER.JS</h3>
        </div>
    );
};

export default Placeholder;