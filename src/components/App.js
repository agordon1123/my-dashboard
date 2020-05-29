import React, { useEffect, useState } from 'react';
import axios from 'axios';
// components
import GitHubGraph from './GitHubGraph';
import Drawer from './Nav';

const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.github.com/users/agordon1123')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Drawer data={data} />
      <GitHubGraph username="agordon1123" />
    </div>
  );
}

export default App;
