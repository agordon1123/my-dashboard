import React, { useEffect, useState } from 'react';
import axios from 'axios';
// components
import GitHubGraph from './GitHubGraph';
import Nav from './Nav';
import Tasks from './Tasks';
import Weather from './Weather';
import Placeholder from './Placeholder';

const App = () => {

  const darkMode = localStorage.getItem('isDarkMode') == 'true';
  const [data, setData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

  useEffect(() => {
    axios
      .get('https://api.github.com/users/agordon1123')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={isDarkMode ? 'App--dark' : 'App--light'}>
      <Nav data={data} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className='content-container'>
        <Weather isDarkMode={isDarkMode} />
        {[0, 1, 2, 3, 4, 5].map(el => <Placeholder key={el} isDarkMode={isDarkMode} />)}
        <GitHubGraph username='agordon1123' />
        <Tasks isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
