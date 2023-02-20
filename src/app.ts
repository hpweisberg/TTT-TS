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

const squareEls = document.querySelectorAll<HTMLElement>('.sqr')
const resetBtn = document.querySelector<HTMLButtonElement>('#resetGame')
const boardEl = document.querySelectorAll<HTMLElement>('.board')
const player1ScoreCountEl = document.querySelector('#player1Score')

const init = (): void => {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  turn = 1,
  winner = false,
  tie = false
}

const render = (): void => {
  updateBoard()
}

function updateBoard ():void {
  // if (!squareEls)

  board.forEach((element: number, idx: number) => {
    if (element === 1){
      squareEls[idx].textContent = 'X'
    } if (element === -1){
      squareEls[idx].textContent = 'O'
    } else {
      squareEls[idx].textContent = ''
    }
  })
}

function handleClick (evt: MouseEvent): void {
  if(!evt.target || !EventTarget.id) return
  const sqIdx: number = 'id' in evt.target?.id

}

function placePiece (idx: number): void {
  board.splice(idx, 1, turn)
}

function checkForTie(): void {
  if (board.includes(0)){
    tie = false
  } else {
    tie = true
    scoreBoard.ties++
  }
}

// number = 'id' in evt.target.id.slice(2)
  // if(!sqIdx || !evt.target.id) return