import React, { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubGraph = props => {
    const { isDarkMode } = props;

    useEffect(() => {
        // removes title and contributions to only display calendar
        // setTimeout(() => {
        //     let title = document.querySelector('.react-github-calendar__title');
        //     let contributions = document.querySelector('.react-github-calendar__meta');
        //     contributions.style.display = "none";
        //     title.style.display = 'none';
        // }, 500);
    }, []);
    
    return (
        <div className={isDarkMode ? 'GitHubGraph--dark' : 'GitHubGraph--light'}>
            <GitHubCalendar username='agordon1123' />
        </div>
    );
};

export default GitHubGraph;
