let color = document.getElementById("color");
let shape = document.getElementById("shape");
let figure = document.getElementById("figure");

shape.addEventListener("change", () =>{
    if (figure.classList.length > 0) {
        figure.classList.remove(figure.classList.item(0))
        figure.classList.add(`${shape.value}`);}
    else figure.classList.add(`${shape.value}`);
})

color.addEventListener("change", () =>{
    figure.style.background = (`${color.value}`)
})
