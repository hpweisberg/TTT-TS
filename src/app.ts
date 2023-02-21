// -------- Constants ------------
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
let player1: string = 'Player 1'
let player2: string = 'Player 2'
let textContent: string

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

// -------- Cashed Element References ------------

const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
console.log('sqrEls:', squareEls)
const resetBtn = document.querySelector('#resetGame')! as HTMLButtonElement
const boardEl = document.querySelector<HTMLDivElement>('.board')!
const player1ScoreCountEl = document.querySelector<HTMLElement>('#player1Score')!
const player2ScoreCountEl = document.querySelector<HTMLElement>('#player2Score')!
const messageEl = document.querySelector('#message')! as HTMLHeadingElement
const player1NameEl = document.querySelector<HTMLElement>('#player1')!
const player2NameEl = document.querySelector<HTMLElement>('#player2')!
const tieEl = document.querySelector<HTMLElement>('#tie')!
const overlay = document.querySelector<HTMLElement>('#overlay')!
const player1NameBox = document.querySelector<HTMLInputElement>('#player1Name')!
const player2NameBox = document.querySelector<HTMLInputElement>('#player2Name')!
const startBtn = document.querySelector('#start-btn')! as HTMLButtonElement
const tieScoreCountEl = document.querySelector<HTMLElement>('#tieScore')!

// -------- Event Listeners ------------

boardEl.addEventListener('click', handleClick)
startBtn.addEventListener('click', function(evt: MouseEvent): void{
  choosePlayerNames()
  updateScoreBoard()
  render()
  overlay.style.display = 'none'
})
// resetBtn.addEventListener('clicl', init)
// squareEls.forEach(function(sqr){
//   sqr.addEventListener('click', handleClick)
// })

// -------- Function ------------

function choosePlayerNames():void {
  console.log('P1 Box:', player1NameBox)
  console.log('P2 Box:', player2NameBox)
  if (player1NameBox.value.length > 0){
    player1 = player1NameBox.value
  } else {
    player1 = `Player 1`
  }
  if (player2NameBox.value.length > 0){
    player2 = player2NameBox.value
  } else {
    player2 = `Player 2`
  }
  console.log('P1 Name:', player1)
  console.log('P2 Name:', player2)
}

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  turn = 1,
  winner = false,
  tie = false
  // messageEl.innerHTML = 'X Goes First'
  render()
}
resetBtn.addEventListener('click', init)

const render = (): void => {
  updateBoard()
  updateMessage()
}

function updateBoard(): void {
  // if (!squareEls)

  board.forEach((element: number, idx: number) => {
    console.log(`Line 89:`,element, idx)
    console.log(board)
    if (squareEls[idx] && element === 1){
      squareEls[idx].textContent = 'X'
  } if (squareEls[idx] && element === -1){
    squareEls[idx].textContent = 'O'
    } if (squareEls[idx] && !element){
      squareEls[idx].textContent = ''
    }
  })
}

function updateMessage(): void{
    console.log('is this running?')
  if (winner === false && tie === false){
    messageEl.textContent = `It's ${turn === 1 ? player1 : player2}'s turn`
  } else if (winner === false && tie === true){
    messageEl.textContent = `It's a Tie`
  } else {
    messageEl.textContent = `Winner Winner Chicken Dinner! ${turn === 1 ? player1 : player2} Wins!`
  }
}

function handleClick (evt: MouseEvent): void {
  if(!(evt.target instanceof HTMLElement)) return
    // console.log(target.id)
    const sqIdx: number = parseInt(evt.target.id.slice(2))
  if (board[sqIdx] !== 0){
    return
  } if (winner === true){
    return
  }
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  incrementScoreBoard()
  updateScoreBoard()
  switchPlayerTurn()
  render()
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

function checkForWinner(): void {
  for (let i: number = 0; i < winningCombos.length; i++){
    if (Math.abs(
      board[winningCombos[i][0]]+
      board[winningCombos[i][1]]+
      board[winningCombos[i][2]]) === 3){
        winner = true
      }
  }
}

function switchPlayerTurn(): void {
  if (winner === true){
    return
  } else {
    turn *= -1
  }
}

function incrementScoreBoard(): void {
  if (winner === false) return
  if (winner === true && turn === 1){
    scoreBoard.player1Wins++
  }
  if (winner === true && turn === -1){
    scoreBoard.player2Wins++
  }
  console.log('scoreboard:', scoreBoard.player1Wins)
}

function updateScoreBoard(): void {
  // choosePlayerNames()
  console.log('updateScoreBoard:', updateScoreBoard)
  player1NameEl.innerHTML = `${player1}:`
  player1ScoreCountEl.innerHTML = `${scoreBoard.player1Wins}`
  player2NameEl.innerHTML = `${player2}:`
  player2ScoreCountEl.innerHTML = `${scoreBoard.player2Wins}`
  tieEl.innerHTML = `Ties:`
  tieScoreCountEl.innerHTML = `${scoreBoard.ties}`
}


init()
// number = 'id' in evt.target.id.slice(2)
  // if(!sqIdx || !evt.target.id) return