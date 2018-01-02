(function(window){

  let _init = ({container = '',cellHeight = 50, cellWidth = 50})=>{
    let gameBody = document.getElementById(container);
      if(gameBody === undefined)
        gameBody = document.getElementsByTagName("body")[0];

          let tbl     = document.createElement("table");
          let tblBody = document.createElement("tbody");
          let gameState = 0;
          for (let i = 0; i < 3; i++) {
              var row = document.createElement("tr");
              for (let j = 0; j < 3; j++) {
               let cell = document.createElement("td");
                cell.setAttribute("width",cellHeight+"px");
                cell.setAttribute("height",cellWidth+"px");
                //setting styles for table cells
                cell.style.textAlign = "center";
                cell.style.cursor = "pointer";
                cell.style.fontSize = (cellHeight*0.4) + 'px';
                cell.addEventListener("click",()=>{
                    let inputState = gameState % 2? 0: 1;
                    let cellText = inputState == 1? 'X':'0';
                    cell.innerHTML = cellText;

                    gameState++;
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

window.Game = {
  init:_init
}
})(window)
