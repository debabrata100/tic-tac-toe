import GameBoard from './game-board';
const ScoreBoard = {
      drawScore: ()=> {
        const table = GameBoard.table;
        const winner = GameBoard.winner;
        GameBoard.table.style.opacity = "0.5";
        const cells = table.getElementsByTagName("td");
        let cellIndex;
        for(let c = 0;c < cells.length;c++){
            cellIndex = parseInt(cells[c].getAttribute("index"));
            if(GameBoard.inputArray[cellIndex] == winner.state && winner.lines.indexOf(cellIndex)!=-1 ){
                cells[c].style.backgroundColor = "#eee";
            }
        }
      },
      declareWinner: ()=> {
        const scoreboard = document.createElement("div");
        scoreboard.style.margin = "auto";
        scoreboard.style.height = '100px';
        scoreboard.style.lineHeight = '110px';
        scoreboard.style.border = 'dotted';
        scoreboard.style.marginTop = '10px';
        scoreboard.style.width = (window.innerWidth-window.innerWidth*0.02)+'px';
        scoreboard.style.backgroundColor = "transparent";
        scoreboard.style.textAlign = "center";
        scoreboard.innerHTML = "Winner: " + GameBoard.winner.name +", Score: " + GameBoard.winner.score;
        document.body.appendChild(scoreboard);
      }
};
export default ScoreBoard;
