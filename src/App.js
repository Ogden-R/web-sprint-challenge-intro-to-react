import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants';
// import { linkMaker } from './components/NavHeader';
import Details from './components/Details';
import CharacterCard from './components/Character';


export default function App() {

  const [swData, setSWData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}people/`)
    .then(res => {
      console.log(res);
      setSWData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {/* <nav className="navBar">
      </nav> */}
      <h1 className="Header">{swData.name}</h1>
      <div className="card-panel">
        <CharacterCard/>
      <div className="panel-content">
        <Details/>
      </div>
      </div>
    </div>
  );
}

