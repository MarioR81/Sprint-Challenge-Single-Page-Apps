import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState();
const {id} = useParams();
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
      // console.log('axios'. res);
      setCharacter(res.data.results);
    }) 
    .catch(error => {
      console.log(error);
    });
  }, [id]);

  // console.log('response', character);

  if (!character) {
    return <div>Loading character information...</div>;
  }

 
    return (
        <Route exact path="/CharacterList">
            
                {character.map((character) => {
                    // console.log('map', character);
                    return <CharacterCard character={character} />
                })}
                
                
          </Route>
)}