const cellCount = 76;

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

// function selectCell(event) {
//   let selectedCellNode = event.target;
//   let previouslySelectedCell = document.querySelector(".selected-cell");
//   if (previouslySelectedCell !== null) {
//     previouslySelectedCell.classList.remove("selected-cell");
//   }
//   selectedCellNode.classList.add("selected-cell");

//   // displayBingoCells()
// }
function onLoad() {
  // I can put more than one thing
  displayBingoCells();
}
window.onload = onLoad;
