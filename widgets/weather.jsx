import React from "react";

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {weather: "", temperature: 0};
  }

  componentDidMount() {
    const geo = navigator.geolocation;

    geo.getCurrentPosition(pos => {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&APPID=645c5d39c7603f17e23fcaffcea1a3c1`;
      const ajax = new XMLHttpRequest();
      ajax.open("GET", url);
      ajax.responseType = 'json';
      ajax.onload = () => {
        if (ajax.status === 200) {
          this.setState({
            weather: ajax.response.weather[0].description,
            temperature: `${parseInt(ajax.response.main.temp - 273.15)}° C`
          });

        }
      };
      ajax.send();
    });
  }

  render(){
    return (
      <div>
        <p> Weather: {this.state.weather},
          Temperature: {this.state.temperature}
        </p>
      </div>
    );
  }

}

export default Weather;
