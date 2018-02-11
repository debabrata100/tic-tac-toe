import GameBoard from './game-board';
(function(window){
  let _init = (params)=> {
      GameBoard.generate(params);
  }
  window.Game = {
    init:_init
  }
})(window)
