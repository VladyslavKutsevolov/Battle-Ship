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
let board = printBoard();
const takeShot = (x, y) => {
  console.log(board);
  if (board[y][x] === 'O') {
    board[y][x] = 0;
  }
  return board;
}

//Place a ship of specified length on the board, specify horizontal 'h' or vertical 'v' orientation and the grid square for the front of the ship
//make sure that a ship has enough space to be placed on the board in the chosen orientation. if it doesn't return an error message;
const placeShip = (shipLength, orientation, x, y) => {
  if (orientation = 'h') {
  //if it's horizontal and there is not enough space to place it in the x direction
    if (9 - x < shipLength) {
      console.log("There is not enough space to place the boat here. Choose a different place for the ship.");
    } 
    //look ahead in the row, if there is already a number where our ship will cross, return an error message.
    let restOfRow = board[y].slice(x, x + shipLength);
    if (restOfRow.includes(!'O')) {
      console.log("Collision Alert! Place the ship so that it is not touching other ships.")
    }
    //update each O to a 2-5 depending on ship length
  }
};

//Handle what happens when a ship is hit by a shot

//handle what happens when a ship is sunk


//handle what happens when all ships are sunk


//handle what happens when the player wants to play again
