const GameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `
   <div class = "square" id = "square-${index}">${square}</div>
   `;
    });
    document.getElementById("gameboard").innerHTML = boardHTML;
  };

  return {
    render,
  };
})();

const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;
  const start = () => {
    players = [
      createPlayer(document.getElementById("player-one").value),
      "X",
      createPlayer(document.getElementById("player-two").value),
      "0",
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    GameBoard.render();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", handleClick);
    });
  };

  const handleClick = (event) => {
    let index = parseInt(event.target.id.split("-")[1]);
  };

  return {
    start,
    handleClick,
  };
})();

const startBtn = document.getElementById("start");

startBtn.addEventListener("click", function () {
  console.log("Start game");
  Game.start();
});
