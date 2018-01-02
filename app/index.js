(function(window){

  let _init = ({container = ''})=>{
    let gameBody = document.getElementById(container);
    if(gameBody === undefined)
      gameBody = document.getElementsByTagName("body")[0];
      console.log("Game Initialised");
  }

window.Game = {
  init:_init
}
})(window)
