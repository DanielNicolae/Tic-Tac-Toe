"use strict";

const grid = (function () {
  const winner = document.getElementById("winner");
  const x0y0 = document.getElementById("x0y0");
  const x1y0 = document.getElementById("x1y0");
  const x2y0 = document.getElementById("x2y0");
  const x0y1 = document.getElementById("x0y1");
  const x1y1 = document.getElementById("x1y1");
  const x2y1 = document.getElementById("x2y1");
  const x0y2 = document.getElementById("x0y2");
  const x1y2 = document.getElementById("x1y2");
  const x2y2 = document.getElementById("x2y2");

  let XorO = {
    x0y0: null, x1y0: null, x2y0: null,
    x0y1: null, x1y1: null, x2y1: null,
    x0y2: null, x1y2: null, x2y2: null
  };

  let isPlayerX = true;
  const inputXorO = function (e) {
    const box = e.target;
    if (box.tagName === "TD" && (box.textContent !== "X" && box.textContent !== "O")) {
      if (isPlayerX) {
        box.textContent = "X";
        isPlayerX = false;
      } else {
        box.textContent = "O";
        isPlayerX = true;
      }
    }
    displayWinner(e);
  };

  function displayWinner() {
    if (x0y0.textContent !== "#" && x0y0.textContent !== "" &&
      ((x0y0.textContent === x1y0.textContent && x1y0.textContent === x2y0.textContent) ||
        (x0y0.textContent === x0y1.textContent && x0y1.textContent === x0y2.textContent) ||
        (x0y0.textContent === x1y1.textContent && x1y1.textContent === x2y2.textContent))) {
      winner.textContent = `Player ${x0y0.textContent} won!`;
    } else if (x0y1.textContent !== "#" && x0y1.textContent !== "" &&
      (x0y1.textContent === x1y1.textContent && x1y1.textContent === x2y1.textContent)) {
      winner.textContent = `Player ${x0y1.textContent} won!`;
    } else if (x0y2.textContent !== "#" && x0y2.textContent !== "" &&
      (x0y2.textContent === x1y2.textContent && x1y2.textContent === x2y2.textContent)) {
      winner.textContent = `Player ${x0y2.textContent} won!`;
    } else if (x1y0.textContent !== "#" && x1y0.textContent !== "" &&
      (x1y0.textContent === x1y1.textContent && x1y1.textContent === x1y2.textContent)) {
      winner.textContent = `Player ${x1y0.textContent} won!`;
    } else if (x0y2.textContent !== "#" && x0y2.textContent !== "" &&
      ((x2y0.textContent === x2y1.textContent && x2y1.textContent === x2y2.textContent) ||
        (x2y0.textContent === x1y1.textContent && x1y1.textContent === x0y2.textContent))) {
      winner.textContent = `Player ${x2y0.textContent} won!`;
    }
  };

  return {
    inputXorO,
    displayWinner
  };
})();


function checkPlayerInput() {
  document.getElementById("tictactoe").addEventListener("click", grid.inputXorO);
}

checkPlayerInput();