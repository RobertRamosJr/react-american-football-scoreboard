//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Toprow from "./Toprow";
import Homescore from "./Homebutton";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const Homescores = (number) =>{setHomeScore(homeScore + number)}

  return (
    <div className="container">
      <section className="scoreboard">
      <Toprow homeScore = {homeScore} awayScore = {awayScore}/>
        <BottomRow />
      </section>
      <section className="buttons">
      <Homescore homescores = {Homescores} />
        <div className="awayButtons">
          <button onClick={()=> setAwayScore(awayScore + 7)} className="awayButtons_touchdown">Away Touchdown</button>
          <button onClick={()=> setAwayScore(awayScore + 3)} className="awayButtons_fieldgoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
