const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");


function setGrid(squares) {
    let gridSize = squares ** 2;
    let gridSquareDimensions = 1000 / squares;

    for (let i = 0; i < gridSize; i++) {
        const div = container.appendChild(document.createElement("div"));
        div.classList.add("grid-square");
        div.addEventListener("mouseover", () => {
            div.classList.toggle("grid-active");
            const RGB = setRGB();
            div.style.backgroundColor = `rgb(${RGB})`;
        })
    }

    const gridSquareClass = document.querySelectorAll(".grid-square");
    gridSquareClass.forEach(element => {
        element.style.width = `${gridSquareDimensions}px`;
        element.style.height = `${gridSquareDimensions}px`;
    })
}

function setRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `${red},${green},${blue}`;
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

button.addEventListener("click", () => {
    let squares = prompt("How many squares per side?");
    removeGrid();
    setGrid(squares);
})

setGrid(2);