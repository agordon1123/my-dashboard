import React, { useState } from 'react';

const Task = props => {
    console.log(props);
    const { title, completed, notes, created } = props.data;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className='task'>
            <p className='title'>{title}</p>
            <p className='status'>{completed ? '✅' : '❌'}</p>
            <p className='notes'>{notes}</p>
            <p>{`${months[created.getMonth()]} ${created.getDate()}`}</p>
        </div>
    );
};

export default Task;
