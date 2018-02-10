class Winner {
    constructor(){
      this._name = null;
      this._score = 0;
    }
    findWinner(inputLines){
      const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        // console.log(inputLines);
        if (inputLines[a] !== undefined && inputLines[a] === inputLines[b] && inputLines[a] === inputLines[c]) {
          this._name = inputLines[a] == 1 ? 'X': '0';
          this.calculateScore(inputLines,inputLines[a]);
          return { state: inputLines[a], lines: [a, b, c]};
        }
      }
      return { state: null, lines:[] };
    }
    calculateScore(inputLines,player){
      for(let i=0;i<inputLines.length;i++){
        if(inputLines[i] == player){
          this._score++;
        }
      }
    }
    get name(){
        return this._name;
    }
    get score(){
        return this._score;
    }

}
export default Winner;
