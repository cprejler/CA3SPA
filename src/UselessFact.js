import React, { useState} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function UselessFact(){
    const[uselessFact, setUselessFact] = useState();
    

    function getUselessFact(){
        let options = {
          'method': 'GET',
          'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        fetch("http://localhost:8080/CA3/api/uselessfact", options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUselessFact(data.text);
      
    });
  }

  function callUselessFact(){
    return (uselessFact ? (<>
    <h3>Useless Fact:</h3>
    <i>{uselessFact}</i>
    </>):(<></>));
  }


  return (
    <div className="UselessFact">
      {callUselessFact()}
      <br></br>
      <button onClick={getUselessFact}>Get a new Useless Fact</button>
    </div>
  );
}
    
export default UselessFact;