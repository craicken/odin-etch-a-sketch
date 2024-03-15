const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = container.appendChild(document.createElement("div"));
    div.classList.add("grid-square");
    div.addEventListener("mouseover", () => {
        div.classList.toggle("grid-active");
    })
}