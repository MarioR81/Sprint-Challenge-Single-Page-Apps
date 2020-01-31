import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import axios from "axios";

export default function Characters() {
  const [data, setData] = useState([]);

  
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // console.log(response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        // console.log('characters', response);
        setData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <Route exact path="/SearchForm">
        <div>
          <form>
            <input
              type="text"
              onChange={handleInputChange}
              value={query}
              name="name"
              tabIndex="0"
              placeholder="search by character name"
              autoComplete="off"
            />
          </form>
          <div>
            {data.map(data => {
              return (
                <div exact path="/SearchForm">
                  <div className="character-list " key={data._id}>
                    <h2>
                        {data.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </Route>
  );
}