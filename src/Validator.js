export default class Validator {
  _rows;
  _cols; 
  _grid;

  constructor(data) {
    this.reorganizeData(data);
  }

  // initialize the module with input data
  // function init(data) {
  //     _reorganizeData(data);
  //     return this;
  // };

  // return true if sudoku is valid
  isValid() {
      return (this._validate(this._rows) && this._validate(this._cols) && this._validate(this._grid));
  };

  // validate rows 
  _validate(data) {
      for (let row = 0; row < 9; row++) {
          data[row].sort();  
          for (let col = 0; col < 9; col++) {
              let value = data[row][col], next_value = data[row][col + 1];

              // check if value exists and is a valid number
              if (!(value && value > 0 && value < 10)){
                  return false;
              }

              // check if numbers are unique
              if (col !== 8 && value === next_value){
                  return false;
              }
          }
      }
      return true;
  };

  // reorganize data into three structures
  _reorganizeData(data){
      let _rows = data;
      let _cols = [];
      let _grid = [];

      // Prefilling the structures with empty array objects
      for (let i = 0; i < 9; i++) {
          _cols.push([]);
          _grid.push([]);
      }
      
      for (let row = 0; row < 9; row++) {

          for (let col = 0; col < 9; col++) {

              // Save each column in a new row
              _cols[col][row] = data[row][col];

              // Calculate grid identifiers
              let gridRow = Math.floor( row / 3 );
              let gridCol = Math.floor( col / 3 );
              let gridIndex = gridRow * 3 + gridCol;

              // Save each grid in a new row
              _grid[gridIndex].push(data[row][col]);        
          }
      }
  }
};