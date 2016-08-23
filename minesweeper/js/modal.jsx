import React from "react";

class Modal extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    if (this.props.gameWon) {
      return (
        <section id="modal" className="modal is-active">
          <article className="modal-content">
            <h1>You Won!</h1>
            <button onClick={this.props.restartGame}>Restart Game</button>

          </article>
          <div className="modal-screen"></div>
        </section>
      );
    } else if (this.props.gameLost){
      return (
        <section id="modal" className="modal is-active">
          <article className="modal-content">
            <h1>You Lost!</h1>
            <button onClick={this.props.restartGame}>Restart Game</button>

          </article>
          <div className="modal-screen"></div>
        </section>
      );
    } else {
      return(
        <div></div>
      );
    }

  }
}

export default Modal;
