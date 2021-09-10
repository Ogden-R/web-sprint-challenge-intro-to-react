// Write your Character component here

// import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
// import './App.css';
import axios from 'axios';
import constants, { BASE_URL } from '../constants/index';

const { open, close } = constants;


export default function CharacterCard(){
    const [characterData, setCharacterData] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}people/`)
        .then(res => {
          console.log(res);
          setCharacterData(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [])

      return (
        <div className='panel-bar'>
            <h3>{characterData.name}</h3>
            <div className="panel-buttons">
                <button className="panel-btn-open">{open}</button>
                <button className="panel-btn-close hide-btn">{close}</button>
            </div>
        </div>
      )
}



