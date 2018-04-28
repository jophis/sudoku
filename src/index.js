import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {easyGame, medGame, hardGame, endGame} from './newGames.js'
import Board from './Board.js'
import Validator from './Validator.js'
import {Button, ButtonGroup} from 'react-bootstrap';

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
      // givenSquaresIndexes: newGameSquares.filter((square, index) => {
      //   square? return index: false
      // })
    })
  }

  render() {
    console.dir (this.state.squares)
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
          <ButtonGroup vertical>
            <Button 
              bsStyle="success"
              onClick={()=> validateSudoku(this.state.squares)}>
              Validate Puzzle
            </Button>
            <Button 
              bsStyle="warning"
              onClick={()=> this.setNewGame(easyGame)}>
              New Easy Game
            </Button>
            <Button onClick={()=> this.setNewGame(medGame)}>
            New Medium Game
            </Button>
            <Button onClick={()=> this.setNewGame(hardGame)}>
            New Hard Game
            </Button>
            <Button onClick={()=> this.setNewGame(endGame)}>
            New solved Game
            </Button>
          </ButtonGroup>
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
  // console.log ('validating')
  // console.dir (Validator.constructor(squares))
  var result = new Validator(squares).isValid()
  console.log ("result " + result);
  result? alert("success") : alert("failure")

}
