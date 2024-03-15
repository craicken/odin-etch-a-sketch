const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const div = container.appendChild(document.createElement("div"));
    div.classList.add("grid-square");
}