const container = document.querySelector("#container");
const button = document.querySelector("#new-grid");


function setGrid() {
    for (let i = 0; i < 256; i++) {
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
    removeGrid();
    setGrid();
})

setGrid();