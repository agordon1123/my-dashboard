import React from 'react';
import Task from './Task';

const testData = [
    {
        title: 'Complete App Skeleton',
        completed: false,
        notes: '',
        created: new Date()
    },
    {
        title: 'Integrate Local Storage',
        completed: false,
        notes: '',                      // one day previous
        created: new Date(Date.now() - (1000 * 60 * 60 * 24)),
    }
];

const Tasks = () => {
    return (
        <div className='tasks-container'>
            <h3>Tasks</h3>
            {testData.map((el, i) => (
                <Task data={el} key={i} />
            ))}
            <h3>+ Add Task</h3>
        </div>
    );
};

export default Tasks;
