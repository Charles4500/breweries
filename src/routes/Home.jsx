// Fetching data here
import React, { useState, useEffect } from 'react';
import Render from '../components/Render';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Foot from '../components/foot/Foot';
import Navbar from '../components/nav/Navbar';


function Home() {
  const [breweries, setBreweries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  function fetchData() {
    return fetch('http://localhost:3000/breweries', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setBreweries(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  const filteredBrews = breweries.filter((brews) =>
    brews.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <h1
        className="text-2xl text-center	
"
      >
        Brewery Finder
      </h1>
      <Search setSearchInput={setSearchInput} searchInput={searchInput} />
      <Filter breweries={filteredBrews} />
      <Render breweries={filteredBrews} />
      <Foot />
    </>
  );
}

export default Home;
