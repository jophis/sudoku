import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square.js';

export default class Board extends React.Component {
  static propTypes = {
    squares: PropTypes.array,
    givenSquares: PropTypes.array,
    onChange : PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  
  renderSquare(squareID) {
    return (
      <Square 
        key= {squareID}
        value={this.props.squares[squareID]}
        onChange={(value) => this.props.onChange(squareID, value)}
        // checks if square is given as part of starting puzzle scenario
        given= {this.props.givenSquares && this.props.givenSquares.includes(squareID)}
      />
    );
  }

  render() {
    const title = 'Sudoku';
    // sets up board (awkwardly)
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