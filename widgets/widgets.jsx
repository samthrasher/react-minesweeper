import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./tabs";
import WeatherClock from "./weather_clock";
import Autocomplete from "./autocomplete";

document.addEventListener("DOMContentLoaded",()=>{
  const root = document.getElementById("root");
  ReactDOM.render(<Widgets/>, root);
});

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabs={[
            {title: "tab1", content: "hi"},
            {title: "tab2", content: "hfjhhi"},
            {title: "tab3", content: "hasi"},
            {title: "tab4", content: "hasdfi"},
          ]}/>

        <WeatherClock/>

        <Autocomplete names={names}/>
    </div>
    );
  }
}

const names = [
    "aa",
    "aah",
    "aahed",
    "aahing",
    "aahs",
    "aal",
    "aalii",
    "aaliis",
    "aals",
    "aardvark",
    "aardvarks",
    "aardwolf",
    "aardwolves",
    "aargh",
    "aas",
    "aasvogel",
    "aasvogels"
  ];
