"use strict";
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
let scoreBoard = {
    player1Wins: 0,
    player2Wins: 0,
    ties: 0
};
const squareEls = document.querySelectorAll('.sqr');
const resetBtn = document.querySelector('#resetGame');
const boardEl = document.querySelectorAll('.board');
const player1ScoreCountEl = document.querySelector('#player1Score');
const init = () => {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        turn = 1,
        winner = false,
        tie = false;
};
const render = () => {
    updateBoard();
};
function updateBoard() {
    // if (!squareEls)
    board.forEach((element, idx) => {
        if (element === 1) {
            squareEls[idx].textContent = 'X';
        }
        if (element === -1) {
            squareEls[idx].textContent = 'O';
        }
        else {
            squareEls[idx].textContent = '';
        }
    });
}
function handleClick(evt) {
    if (!evt.target || !EventTarget.id)
        return;
    const sqIdx = 'id' in evt.target?.id;
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
    for (let i = 0 < winningCombos.length; i++;) {
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
// number = 'id' in evt.target.id.slice(2)
// if(!sqIdx || !evt.target.id) return
