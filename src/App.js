import React, { useEffect, useState } from 'react';
import './App.css';
import Drawer from './Drawer';
import axios from 'axios';
import GitHubGraph from './GitHubGraph';

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
      <h1>Hello world</h1>
      <GitHubGraph username="agordon1123" />
    </div>
  );
}

export default App;
