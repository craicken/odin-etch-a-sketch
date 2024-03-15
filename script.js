const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");


function setGrid(squares) {

    let gridSize = squares ** 2;

    document.querySelector("#container").style.width = `${squares * 50}px`;

    for (let i = 0; i < gridSize; i++) {
        const div = container.appendChild(document.createElement("div"));
        div.classList.add("grid-square");
        div.addEventListener("mouseover", () => {
            div.classList.toggle("grid-active");
        })
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

button.addEventListener("click", () => {
    let squares = prompt("How mmany squares per side?");
    removeGrid();
    setGrid(squares);
})

setGrid(16);