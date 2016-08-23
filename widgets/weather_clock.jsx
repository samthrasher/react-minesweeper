import React from "react";
import Clock from "./clock";
import Weather from "./weather";

// class WeatherClock extends React.Component{
//
//   constructor(props){
//     super(props);
//   }
//
//   render() {
//     <div>
//
//     </div>
//   }
// }

const WeatherClock = () => (
  <div>
    <Clock/>
    <Weather/>
  </div>
);

export default WeatherClock;
