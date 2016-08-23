import React from "react";

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => (
      this.setState({currentTime: new Date()})
      ), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  render() {
    return (
      <div>
        {this.state.currentTime.toUTCString()}
      </div>
    );
  }
}

export default Clock;
