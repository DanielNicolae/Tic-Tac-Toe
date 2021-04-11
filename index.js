"use strict";

const grid = (function () {
  const XorO = {
    x0y0: null, x1y0: null, x2y0: null,
    x0y1: null, x1y1: null, x2y1: null,
    x0y2: null, x1y2: null, x2y2: null
  };
  let playerX = true;
  const inputXorO = function (e) {
    const box = e.target;
    if (box.tagName === "TD" && (box.textContent !== "X" && box.textContent !== "O")) {
      if (playerX) {
        box.textContent = "X";
        playerX = false;
      } else {
        box.textContent = "O";
        playerX = true;
      }
    }
  }
  return {
    XorO,
    inputXorO
  };
})();

let ticTacToeGame = grid.XorO;


function checkPlayerInput() {
  document.getElementById("tictactoe").addEventListener("click", grid.inputXorO);
}

checkPlayerInput();