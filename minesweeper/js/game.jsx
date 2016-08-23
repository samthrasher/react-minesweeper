import React from 'react';
import Minesweeper from './minesweeper';
import Board from './board';
import Modal from './modal';

class Game extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(10, 10)
    };
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, altKey) {
    if (altKey) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  }

  restartGame() {
    this.setState({ board: new Minesweeper.Board(10, 10) });
  }

  render(){
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        <Modal gameWon={this.state.board.won()}
          gameLost={this.state.board.lost()}
          restartGame={this.restartGame}/>
      </div>
    );
  }
}

export default Game;
