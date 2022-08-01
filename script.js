let color = document.getElementById("color");
let shape = document.getElementById("shape");
let figure = document.getElementById("figure");



shape.addEventListener("change", () =>{
    figure.classList.add(`${shape.value}`)
})

color.addEventListener("change", () =>{
    figure.style.background = (`${color.value}`)
})

