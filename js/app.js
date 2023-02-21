"use strict";
// -------- Constants ------------
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let board;
let turn;
let winner;
let tie;
let player1;
let player2;
let textContent;
let scoreBoard = {
    player1Wins: 0,
    player2Wins: 0,
    ties: 0
};
// -------- Cashed Element References ------------
const squareEls = document.querySelectorAll('.sqr');
console.log('sqrEls:', squareEls);
const resetBtn = document.querySelector('#resetGame');
const boardEl = document.querySelector('.board');
const player1ScoreCountEl = document.querySelector('#player1Score');
const player2ScoreCountEl = document.querySelector('#player2Score');
const messageEl = document.querySelector('#message');
const player1NameEl = document.querySelector('#player1');
const player2NameEl = document.querySelector('#player2');
const tieEl = document.querySelector('#tie');
const overlay = document.querySelector('#overlay');
const player1NameBox = document.querySelector('#player1Name');
const player2NameBox = document.querySelector('#player2Name');
const startBtn = document.querySelector('#start-btn');
const tieScoreCountEl = document.querySelector('#tieScore');
// -------- Event Listeners ------------
boardEl.addEventListener('click', handleClick);
// resetBtn.addEventListener('clicl', init)
// squareEls.forEach(function(sqr){
//   sqr.addEventListener('click', handleClick)
// })
// -------- Function ------------
// const choosePlayerNames = (evt: MouseEvent) => void {
//   if (player1NameBox.value.length > 0){
//     player1 = player1NameBox.value
//   } else {
//     player1 = `Player 1`
//   }
//   if (player2NameBox.value.length > 0){
//     player2 = player2NameBox.value
//   } else {
//     player2 = `Player 2`
//   }
// }
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        turn = 1,
        winner = false,
        tie = false;
}
resetBtn?.addEventListener('click', init);
const render = () => {
    updateBoard();
    updateMessage();
};
function updateBoard() {
    // if (!squareEls)
    board.forEach((element, idx) => {
        console.log(`Line 89:`, element, idx);
        console.log(board);
        if (squareEls[idx] && element === 1) {
            squareEls[idx].textContent = 'X';
        }
        if (squareEls[idx] && element === -1) {
            squareEls[idx].textContent = 'O';
        }
        if (squareEls[idx] && !element) {
            squareEls[idx].textContent = '';
        }
    });
}
function updateMessage() {
    console.log('is this running?');
    if (winner === false && tie === false) {
        messageEl.textContent = `It's ${turn === 1 ? player1 : player2}'s turn`;
    }
    else if (winner === false && tie === true) {
        messageEl.textContent = `It's a Tie`;
    }
    else {
        messageEl.textContent = `Winner Winner Chicken Dinner! ${turn === 1 ? player1 : player2} Wins!`;
    }
}
function handleClick(evt) {
    if (!(evt.target instanceof HTMLElement))
        return;
    // console.log(target.id)
    const sqIdx = parseInt(evt.target.id.slice(2));
    if (board[sqIdx] !== 0) {
        return;
    }
    if (winner === true) {
        return;
    }
    placePiece(sqIdx);
    checkForTie();
    checkForWinner();
    incrementScoreBoard();
    switchPlayerTurn();
    render();
}
function placePiece(idx) {
    board.splice(idx, 1, turn);
}
function checkForTie() {
    if (board.includes(0)) {
        tie = false;
    }
    else {
        tie = true;
        scoreBoard.ties++;
    }
}
function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        if (Math.abs(board[winningCombos[i][0]] +
            board[winningCombos[i][1]] +
            board[winningCombos[i][2]]) === 3) {
            winner = true;
        }
    }
}
function switchPlayerTurn() {
    if (winner === true) {
        return;
    }
    else {
        turn *= -1;
    }
}
function incrementScoreBoard() {
    if (winner === false)
        return;
    if (winner === true && turn === 1) {
        scoreBoard.player1Wins++;
    }
    if (winner === true && turn === -1) {
        scoreBoard.player2Wins++;
    }
}
init();
// number = 'id' in evt.target.id.slice(2)
// if(!sqIdx || !evt.target.id) return
