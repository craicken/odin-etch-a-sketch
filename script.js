const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");


function setGrid(squares) {

    let width = `${(squares * 50) * squares / 2}px`;
    document.querySelector("#container").style.width = width;

    for (let i = 0; i < squares; i++) {
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
    let squares = prompt("How big would you like your grid?");
    removeGrid();
    setGrid(squares);
})

setGrid(256);