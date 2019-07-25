import React from "react";

const Tracking = (props) => {
  // console.log(props.tracking);
  let propsCopy = [...props.tracking];
  let arrTracking = [];

  return (
    <div>
      <h3>Today's foods</h3>
      <ul>
      {propsCopy.map((food) => {
        <li>{food.name}</li>
      })}
      </ul>
      <p>Total: {props.tracking.map(food => food.calories).reduce((accumulator, currentValue) => accumulator + currentValue, 0)} </p>
    </div>
  );
}


export default Tracking;
