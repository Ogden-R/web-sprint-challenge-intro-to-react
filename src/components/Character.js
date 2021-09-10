// Write your Character component here

import styled from 'styled-components';
import React from 'react';

// import axios from 'axios';
import constants  from '../constants/index';

const { open, close } = constants;

const StyledCharacterDiv = styled.div`
h2 {
    top: 3%;
    left: 5%;
    transform-origin: center left;
  }
  button, input {
    margin: 3px;
    color: #7a6a6a;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 3px;
    height: 1.8em;
  }
  
  .panel-buttons button {
    cursor: pointer;
    background: rgb(255, 215, 0);
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    padding: 5px;
  }
  .hide-btn {
    display: none;
  }
  .panel-content {
    display: none;
    margin-top: 15px;
  }
  .toggle-on {
    display: block;
  }
`

export default function CharacterDetails(props){
 
      return (
        <StyledCharacterDiv className='panel-bar'>
            <h2>{props.name}</h2>
            <div className="panel-buttons">
                <button className="panel-btn-open toggle-on">{open}</button>
                <button className="panel-btn-close  toggle-on hide-btn">{close}</button>
            </div>
        </StyledCharacterDiv>
      )
}



