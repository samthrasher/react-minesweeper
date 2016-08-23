import React from 'react';


class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  tileText(){
    let tile = this.props.tile;
    if (tile.explored) {
      if (tile.bombed) {
        return "💣";
      } else if (tile.adjacentBombCount() === 0){
        return "";
      } else {
        return tile.adjacentBombCount().toString();
      }
    } else if (tile.flagged) {
      return "🚩";
    } else {
      return "";
    }
  }

  handleClick(e) {
    this.props.updateGame(this.props.tile, e.altKey);
  }

  render() {
    return (
      <div className={"tile " +  (this.props.tile.explored ? "tile-revealed" : "tile-hidden")}
          onClick={this.handleClick}>
        {this.tileText()}
      </div>
    );
  }
}

export default Tile;
