import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    console.log(this.state.value)
    return (
      <input type = "text"
        className="square"
        value={this.props.value}
        onChange={() => this.props.onChange()}
        // onChange={() => this.setState({value})}
      />
        
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(''),
    };
  }

  handleChange(i) {
    console.log ( "i is " + i)
    console.log (i.target.value);
    const squares = this.state.squares.slice();
    squares[i] = i.target.value;
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onChange={(event, i) => this.handleChange(i)}
      />
    );
  }

  render() {
    const title = 'sudoku';
    console.log (this.state.squares)

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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
