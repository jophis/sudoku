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
    const squares = this.state.squares.slice();
    squares[squareID] = value
    this.setState({squares: squares});
  }

  setNewGame(newGameSquares){
    // filters down to indexes of given squares (puzzle start scenario)
    // so we can use this to disable given squares
    var givenSquares = newGameSquares.map((value, index) => 
      {if (value) return index}).filter((value) => value) 

    this.setState({
      squares: newGameSquares,
      givenSquares
    })
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.state.squares}
            givenSquares = {this.state.givenSquares}
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
              bsStyle="info"
              onClick={()=> this.setNewGame(easyGame)}>
              New Easy Game
            </Button>
            <Button 
              bsStyle="info"
              onClick={()=> this.setNewGame(medGame)}>
              New Medium Game
            </Button>
            <Button
              bsStyle="info" 
              onClick={()=> this.setNewGame(hardGame)}>
              New Hard Game
            </Button>
            <Button
              bsStyle="info" 
              onClick={()=> this.setNewGame(endGame)}>
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
  var result = new Validator(squares).isValid()
  result? alert("Solution is correct, congratulations!") : alert("Solution is incorrect, try again.")

}
