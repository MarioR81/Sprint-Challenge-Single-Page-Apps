import React from "react";
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
display: flex;
margin: auto;
text-decoration: none;
`;


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <br/>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/CharacterList">Character List</Link>
      </Nav>
    </header>
  );
}
