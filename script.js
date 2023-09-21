// JavaScript code for the Tic Tac Toe game

// Define variables
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
let currentPlayer = 'X';
let player1Name = '';
let player2Name = '';

// Function to check if the game is over
function isGameOver() {
  // Check rows, columns, and diagonals for a win
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }

  // Check for a tie
  if (![...cells].some(cell => cell.textContent === '')) {
    return true;
  }

  return false;
}

// Function to handle cell click
function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent === '' && !isGameOver()) {
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateMessage();
  }

  if (isGameOver()) {
    const winner = currentPlayer === 'X' ? player2Name : player1Name;
    if (winner) {
      message.textContent = `${winner} congratulations, you won!`;
    } else {
      message.textContent = 'It\'s a tie!';
    }
  }
}

// Function to update the message
function updateMessage() {
  const playerName = currentPlayer === 'X' ? player1Name : player2Name;
  message.textContent = playerName ? `${playerName}, you're up!` : '';
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  player1Name = document.querySelector('#player-1').value;
  player2Name = document.querySelector('#player-2').value;
  document.querySelector('.input-section').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
  updateMessage();
}

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('#submit').addEventListener('click', handleFormSubmit);

