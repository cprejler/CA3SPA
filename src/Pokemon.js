import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";

export default Pokemon;


function Pokemon(){
  const[pokemonName, setPokemonName] = useState();
  const[pokemonID, setPokemonID] = useState();
  const[pokemonType, setPokemonType] = useState();
  const[pokemonMove, setPokemonMove] = useState();




  function getPokemon(){
      let options = {
        'method': 'GET',
        'headers': {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      fetch("http://localhost:8080/CA3/api/pokemon/1", options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPokemonName(data.name); 
        setPokemonID(data.id)
  
      },[]);
    }

    function pokemonfact() {
      return (pokemonName ? (<>
          <h1>Pokemon info:</h1>
          <h4>Pokemon ID: {pokemonID}</h4>
          <h4>Pokemon Name: {pokemonName}</h4>
        


   }
          </>):(<></>));
        }


        return (
          <div className="App">
              
            {pokemonfact()}<br/>
            
          
       
            <button onClick={getPokemon}>Get Pokemon</button>
          </div>
        );
        }