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
