const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

let board: number[]
let turn: number
let winner: boolean
let tie: boolean

type ScoreBoard = {
  player1Wins: number,
  player2Wins: number,
  ties: number
}

let scoreBoard = {
  player1Wins: 0,
  player2Wins: 0,
  ties: 0
}

