//by vertraxumtes
const board = document.getElementById('board')
const cells = document.querySelectorAll('#cell')
const header = document.querySelector('.playGame')
const restartButton=document.getElementById('restartButton')

const PLAYER_CLASS = 'x'
const OPP_CLASS = 'circle'
let currentClass 

const WINNING_COMBINATIONS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let playerTurn

restartButton.addEventListener('click',restartGame)
function restartGame(){
    header.innerText=`Tic-Tac-Toe`
    playerTurn = true
    setHover()
    
    cells.forEach(cell=>{
        cell.style.cursor='pointer'
        cell.classList.remove(PLAYER_CLASS)
        cell.classList.remove(OPP_CLASS)
    })
    cells.forEach(cell=>{
        cell.addEventListener('click',onClick,{once:true})
    })
}
restartGame()

function onClick(e){
    
    const cellClicked=e.target;
    markCell(playerTurn,cellClicked);
    
    if(checkWinner()){
        endGame('win')
    }else if(checkDraw()){
        endGame('draw')
    }else{
        switchTurns()
        setHover()
    }
}
onClick()

function checkWinner(){
    if(playerTurn){
        currentClass = PLAYER_CLASS
    }else{
        currentClass=OPP_CLASS
    }
    return WINNING_COMBINATIONS.some(combo=>{
        return combo.every(cell=>{
            return cells[cell].classList.contains(currentClass)
        })
    })
}

function checkDraw(){
   return [...cells].every(cell=>{
       return cell.classList.contains(PLAYER_CLASS)||
       cell.classList.contains(OPP_CLASS)
   })
}

function endGame(result){
    if(playerTurn){
        currentClass = PLAYER_CLASS
    }else{
        currentClass=OPP_CLASS
    }

    if(result==='win'){
        header.innerText=`${playerTurn ? "X" : "O"} has Won the TicTacToe! Good Job bro`
        board.classList.remove(PLAYER_CLASS)
        board.classList.remove(OPP_CLASS)
        cells.forEach(cell=>{
            cell.style.cursor='auto'
            cell.removeEventListener('click',onClick)
        })


    }else if(result==='draw'){
        header.innerText='Draw!'
        
    }
  
}

function markCell(playerTurn,cellClicked){
    if(playerTurn){
        cellClicked.classList.add(PLAYER_CLASS)
    }else{
        cellClicked.classList.add(OPP_CLASS)
    }
}

function switchTurns(){
    
    playerTurn = !playerTurn
    
}
function setHover(){
    board.classList.remove(PLAYER_CLASS)
    board.classList.remove(OPP_CLASS)
    if(playerTurn){
        board.classList.add(PLAYER_CLASS)
    }else{
        board.classList.add(OPP_CLASS)
    }
}

//by vertraxumtes









