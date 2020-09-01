//Function ideas, instructions and pseudocode for playing the game

//print a 10x10 board, put a O in the place of water (no hit)
const printBoard = () => {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let k=0; k < 10; k++) {
      row.push('O')
    }
    board.push(row);
  }
  console.log(board);
  return board;
};

//Take a shot at the board, if water is hit (and if it hasn't already been hit) turn it form O to 0
//give the coordinate in the form x, y
//print the board at the end of the shot
const takeShot = (x, y) => {
  let board = printBoard();
  console.log(board);
  if (board[x][y] === 'O') {
    board[x][y] = 0;
  }
  console.log(board);
}

//Place a ship of specified length on the board, specify horizontal 'h' or vertical 'v' orientation and the grid square for the front of the ship
//make sure that a ship has enough space to be placed on the board in the chosen orientation. if it doesn't return an error message;
const placeShip = (length, orientation, x, y) => {

}

//Handle what happens when a ship is hit by a shot
const hitShip

//handle what happes when a ship is sunk


//handle what happens when all ships are sunk


//handle what happens when the player wants to play again
