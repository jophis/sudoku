export default class Validator {
  constructor(data) {
    
    this._rows = []
    this._cols =[]
    this._grid = []
    this._chunk = []
    this._reorganizeData(data);
  }

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
      // slices data into array of 9 arrays (puzzle rows)

      for(var index = 0; index < 81; index += 9) {
        this._chunk = data.slice(index,index+9)
        this._rows.push(this._chunk)
      }

      console.dir (this._rows)

      // Prefilling the structures with empty array objects
      for (let i = 0; i < 9; i++) {
          this._cols.push([]);
          this._grid.push([]);
      }
      
      for (let row = 0; row < 9; row++) {

          for (let col = 0; col < 9; col++) {

              // Save each column in a new row
              this._cols[col][row] = this._rows[row][col];

              // Calculate grid identifiers
              let gridRow = Math.floor( row / 3 );
              let gridCol = Math.floor( col / 3 );
              let gridIndex = gridRow * 3 + gridCol;

              // Save each grid in a new row
              this._grid[gridIndex].push(this._rows[row][col]);        
          }
      }
  }
};