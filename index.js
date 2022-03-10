const cellCount = 76;

function displayBingoCells() {
  let containerNode = document.getElementById("container");
  for (let cell = 1; cell <= cellCount; cell++) {
    let cellNode = document.createElement("div");
    cellNode.innerText = cell;
    cellNode.classList.add("cell");
    containerNode.appendChild(cellNode);
    containerNode.addEventListener("click", selectCell);
  }
}
function randomizeNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
}
function selectCell(event) {
  let selectedCellNode = event.target;
  let previouslySelectedCell = document.querySelector(".selected-cell");
  if (previouslySelectedCell !== null) {
    previouslySelectedCell.classList.remove("selected-cell");
  }
  selectedCellNode.classList.add("selected-cell");

  // displayBingoCells()
}
function onLoad() {
  // I can put more than one thing
  displayBingoCells();
}
window.onload = onLoad;
