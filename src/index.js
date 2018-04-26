import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import easyGame from './newGames.js'

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    // this regex verifies only numerical values are entered
    const re = /^[0-9\b]+$/;
    return (
      <input type = "text"
        inputMode = "numeric"
        className="square"
        maxLength= "1"
        value={this.props.value}
        onChange={(squareID) => 
          {if (squareID.target.value === '' || re.test(squareID.target.value)) {
                   this.props.onChange(squareID.target.value)}}}
      />
    );
  }
}

class Board extends React.Component {
  renderSquare(squareID) {
    return (
      <Square 
        value={this.props.squares[squareID]}
        onChange={(value) => this.props.onChange(squareID, value)}
      />
    );
  }

  render() {
    const title = 'sudoku';

    // sets up board
    return (
      <div>
        <div className="status">{title}</div>
        <div className="board-row">
          {[0,1,2,3,4,5,6,7,8].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[9,10,11,12,13,14,15,16,17].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[18,19,20,21,22,23,24,25,26].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[27,28,29,30,31,32,33,34,35].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[36,37,38,39,40,41,42,43,44].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[45,46,47,48,49,50,51,52,53].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[54,55,56,57,58,59,60,61,62].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[63,64,65,66,67,68,69,70,71].map ((n) => {
              return this.renderSquare(n)})}
        </div>
        <div className="board-row">
          {[72,73,74,75,76,77,78,79,80].map ((n) => {
              return this.renderSquare(n)})}
        </div>


      </div>
    );
  }
}

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
  console.log ("validating")
  console.log (squares)
  var index = 0;
  var squaresRows = []
  var chunk = []

  for(index = 0; index < 81; index += 9) {
    chunk = squares.slice(index,index+9)
    squaresRows.push(chunk)
  }

  console.log ("squaresRows is " + squaresRows)




  return true
}
