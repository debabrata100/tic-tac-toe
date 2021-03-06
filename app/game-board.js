import Winner from './winner';
import ScoreBoard from './score-board';
const GameBoard = { inputArray: [], table: [], winner: {} };
GameBoard.generate = ({container = '',cellHeight = 50, cellWidth = 50}) => {
  const W = new Winner();
  let gameBody = document.getElementById(container);
  if(gameBody === undefined)
      gameBody = document.getElementsByTagName("body")[0];
      const tbl     = document.createElement("table");
      GameBoard.table = tbl;
      const tblBody = document.createElement("tbody");
      let gameState = 0;
      let cellIndex = 0;
      for (let i = 0; i < 3; i++) {
          let row = document.createElement("tr");
          for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("index",(cellIndex++));
            cell.setAttribute("width",cellHeight+"px");
            cell.setAttribute("height",cellWidth+"px");
            //setting styles for table cells
            cell.style.textAlign = "center";
            cell.style.cursor = "pointer";
            cell.style.fontSize = (cellHeight*0.4) + 'px';
            cell.addEventListener("click",()=> {
                let index = cell.getAttribute("index");
                if(GameBoard.inputArray[index] !== undefined || W.name)
                  return;
                let inputState = gameState % 2? 0: 1;
                let cellText = inputState == 1? 'X':'0';
                cell.innerHTML = cellText;
                GameBoard.inputArray[index] = inputState;
                gameState++;
                let winner = W.findWinner(GameBoard.inputArray);
                GameBoard.winner = {...winner, name: W.name, score: W.score}; // Object destructuring
                if(winner.state == 0 || winner.state == 1){
                    ScoreBoard.declareWinner();
                    ScoreBoard.drawScore();
                }
            })
            row.appendChild(cell);
          }
          tblBody.appendChild(row);
      }

    tbl.appendChild(tblBody);
    gameBody.appendChild(tbl);
    tbl.setAttribute("border", "1");
    // setting styles for table
    tbl.style.borderCollapse = 'collapse';
    tbl.style.border = '2px solid #000';
    tbl.style.height = "auto";
    tbl.style.width = "auto";
    tbl.style.margin = "0 auto";
}
export default GameBoard;
