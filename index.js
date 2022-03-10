const cellCount = 76;
const userBoardCount = 24;
function displayBingoCells() {
  let containerNode = document.getElementById("container");
  for (let cell = 1; cell <= cellCount; cell++) {
    let cellNode = document.createElement("div");
    cellNode.innerText = cell;
    cellNode.classList.add("cell");
    containerNode.appendChild(cellNode);
  }
}
function randomizeNumber() {
  function randomNum() {
    return Math.floor(Math.random() * cellCount) + 1;
  }
  let randNum = randomNum();
  let selectCell = document.querySelectorAll(".cell");
  for (let i = 0; i < selectCell.length; i++) {
    if (randNum === parseInt(selectCell[i].innerText)) {
      selectCell[i].classList.add("selected-cell");
    }
  }
}

function displayUserBoard() {
  let userBoardNode = document.getElementById("user-board");
  for (let board = 1; board <= userBoardCount; board++) {
    let boardNode = document.createElement("div");
    boardNode.innerText = board;
    boardNode.classList.add("cell");
    userBoardNode.appendChild(boardNode);
  }
}
function randomizeUserBoard() {
  function randomNumb() {
    return Math.floor(Math.random() * 24) + 1;
  }
  let randNum = randomNumb();
  let selectCell = document.querySelectorAll(".board");
  for (let i = 0; i < selectCell.length; i++) {
    if (randNum === parseInt(selectCell[i].innerText)) {
      selectCell[i].classList.add("selected-cell");
    }
  }
}
function onLoad() {
  // I can put more than one thing
  displayBingoCells();
  displayUserBoard();
}
window.onload = onLoad;
