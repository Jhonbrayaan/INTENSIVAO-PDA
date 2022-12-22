// DOM

const { promiseImpl } = require("ejs");

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
  document.body.innerHTML += "<h1> Ola Mundo</h1>"
};

// const btn = document.getElementById("btn"); *//

btn.addEventListener("mouseover", () => {
  btn.style.backgroundcolor = "red"
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundcolor = "white"
});


// FECTH

btn.addEventListener("click", async () => {
 const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
 console.log(data)
});


// PROMESSA
const falamae = "carro de brinquedo"

const promessa = new Promise((aceita, rejeitada) => {
  if(falamae === "carro de verdade") {
    aceita();
  } else {
    rejeitado();
  }
})
    .then(() => console.log("Foi aceita")) // sucesso
    .catch(() => console.log("Rejeitada")); // erro



// CALBACKS


function ola () {
  console.log("ola mundo")
}

function exibir(action){
  action();
}

exibir(ola)


function f50() {
  console.log. log("0 a 50")
}

function f40() {
  
}