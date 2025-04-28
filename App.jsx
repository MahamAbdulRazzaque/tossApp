import React, { useState } from "react";
import "./App.css"

function TossApp() {
  const[Choice, setChoice] = useState(null);
  const[result, setResult] = useState(null);

  const TossCoin = (Choice) => {
    const outcome = Math.random()< 0.5 ? 'Heads' : 'Tails';
    setResult(outcome);
    if (outcome === Choice) {
      alert('You Win🎉..!!!');
    }
    else{
      alert('You lose🤦‍♂️..!!!');
    }
  }

  return(
    <div>
       <h1>Heads Or Tails?</h1>
       <button onClick={() => TossCoin('Heads')}>Heads</button>
       <button onClick={() => TossCoin('Tails')}>Tails</button>
       <p>Result:{result}</p>
    </div>
  )
}

export default TossApp;