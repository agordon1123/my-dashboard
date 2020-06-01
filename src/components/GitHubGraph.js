import React, { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubGraph = () => {

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
        <div className='graph-container'>
            <GitHubCalendar username='agordon1123' />
        </div>
    );
};

export default GitHubGraph;
