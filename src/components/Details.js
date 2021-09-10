import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #032357;
margin:  -26.56px 0;
h2{
    padding-top:1%;
    font-size: 2rem;
    color: ${pr => pr.theme.white};    
    font-family: Rajdhani;  
    text-decoration: underline;
}
p{
    margin: 0 10%;  
    padding:  1%;
    font-size: 1.2rem;
    color: ${pr => pr.theme.white};    
    font-family: Rajdhani;   
}
`

export default function CharacterDetails(props){

    return (
        <StyledDiv className='panel-content'>
            <h2>About {props.name}</h2>
            <p> Species: {props.species} Gender: {props.gender} </p>
            <p> {props.name} has {props.hair_color} hair and {props.eye_color} eyes.</p>
            <p> {props.name} is {props.height/30.48} ft tall</p>
            <p> They were born in the year {props.birth_year} on the planet {props.homeworld}</p>
            <p>you can see {props.name} in the {props.films} </p>
        </StyledDiv>
    )
}