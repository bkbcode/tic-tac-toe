// assign squares to variable
const squares = document.querySelectorAll(".square");

// assign title to a variable
const title = document.getElementById("title");

// current player
let currentPlayer = "X";

// game state
let gameWon = false;
let draw = false;

// function to assign x/o
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.innerHTML === "" && !gameWon) {
      // assign svg to square
      square.innerHTML = currentPlayer;

      // check if there's a winner
      if (checkWinner(currentPlayer)) {
        gameWon = true;
        title.innerHTML = `${currentPlayer} WINS! Refresh to play again.`;
        return;
      }

      // Check if board is full (draw)
      if (checkIfBoardIsFull()) {
        title.innerHTML = "It's a Draw! Refresh to play again.";
        return; // Exit the function after declaring a draw
      }

      // switch between players
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      title.innerHTML = `${currentPlayer} Turn!`;
    }
  });
});

// funtcion to check if a player has won
function checkWinner(player) {
  // define winning combinations
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return squares[index].innerHTML === player;
    });
  });
}

function checkIfBoardIsFull() {
  // check if every square has inner html
  return Array.from(squares).every((square) => square.innerHTML !== "");
}
