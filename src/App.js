import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom';
import SearchForm from "./components/SearchForm.js";



export default function App() {
  return (
    <main>
          
      <Header />
      <div>
        <SearchForm/>
      </div>

      <div>
      <Route exact path="/CharacterList"><CharacterList/></Route>
      </div>
      <div>
      <Route exact path="/SearchForm"><CharacterList/></Route>
      </div>
    </main>
  );
}
