import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Grid from './Grid';

const MainWrapper = () => {
  const [data, setData] = useState('');
  const [url, setUrl] = useState(
    'https://www.breakingbadapi.com/api/characters'
  );
  const [active, setActive] = useState('');

  const changeUrl = (type) => {
    setUrl(`https://www.breakingbadapi.com/api/${type}`);
    setActive(type);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      result.data.map((it) => {
        console.log(it);
      });
      setData(result.data);
    };
    fetchData();
    console.log(data);
  }, [url]);
  return (
    <div className="background1">
      <div className="mainContainer">
        <Navbar changeUrl={changeUrl} />

        {data === '' ? <h1>loading</h1> : <Grid data={data} />}
      </div>
    </div>
  );
};

export default MainWrapper;
