// DOM

// let h1 = document.querySelector("#titulo")*//
// h1.textContent = "Ola"

const p = document.createElement("p");
const h1 = document.createElement("h1");
h1.innertext = "Hello Word";
// p.setAttribute("class", titulo)
p.appendChild(h1)
document.body.append(p);


// document.body.innerText = "<p class='titulo'><h1>hello word</h1></p>"


// EVENTOS
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.innerHTML += "<h1>Ola Mundo</h1>"
});

btn.onclick = () => {
  document.body.innerHTML += "<h1>Ola Mundo</h1>"
};

function addtittle() {
  document.body.innerHTML += "<h1"
}