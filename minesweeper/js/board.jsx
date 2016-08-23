import React from "react";
import Tile from './tile';

class Board extends React.Component{

  render(){
    // debugger;
    return(
      <div className="board">
        {this.props.board.grid.map((row, rowIdx) => (
          <div key={rowIdx} className="tile-row">
            {row.map((tile, colIdx) => (
              <Tile key={[rowIdx, colIdx]} tile={tile} updateGame={this.props.updateGame}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
