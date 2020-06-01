import React, { useEffect, useState } from 'react';
import axios from 'axios';
// components
import GitHubGraph from './GitHubGraph';
import Nav from './Nav';
import Tasks from './Tasks';
import Weather from './Weather';
import Placeholder from './Placeholder';

const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.github.com/users/agordon1123')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Nav data={data} />
      <div className='content-container'>
        <Weather />
        {[0, 1, 2, 3, 4, 5].map(el => <Placeholder key={el} />)}
        <GitHubGraph username='agordon1123' />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
