import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {easyGame, medGame, hardGame} from './newGames.js'
import Board from './Board.js'
import Validator from './Validator.js'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(""),
    };
  }

  handleChange(squareID, value) {
    console.log ( "squareID is " + squareID)
    console.log ( "value is " + value)
    const squares = this.state.squares.slice();
    squares[squareID] = value
    this.setState({squares: squares});
  }

  setNewGame(newGameSquares){
    this.setState({
      squares: newGameSquares
    })
  }

  render() {
    console.dir (this.state.squares)
    console.dir (easyGame)
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.squares}
            onChange={(squareID, value) => 
              this.handleChange(squareID, value)}
          />
        </div>
        <div className="game-info">
          <ul>
            <button onClick={()=> validateSudoku(this.state.squares)}>
            Validate Puzzle
            </button>
            <button onClick={()=> this.setNewGame(easyGame)}>
            New Easy Game
            </button>
            <button onClick={()=> this.setNewGame(medGame)}>
            New Medium Game
            </button>
            <button onClick={()=> this.setNewGame(hardGame)}>
            New Hard Game
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function validateSudoku(squares) {
  console.log ('validating')
  console.dir (Validator.reorganizeData(squares))
  // var result = Validator.constructor(squares).isValid()
  // console.log ("result " + result);
}
