import React from 'react';

const Homebutton = (props) => {
    return (
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={()=> props.homescores(7)} className="homeButtons_touchdown">Home Touchdown</button>
          <button onClick={()=> props.homescores(3)} className="homeButtons_fieldgoal">Home Field Goal</button>
        </div>
    );
};

export default Homebutton;