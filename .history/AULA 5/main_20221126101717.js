let h1 = document.querySelector("#titulo")
h1.textContent = "Ola"

const p = document.createElement("p")
const h1 = document.createElement("h1")
p.textContent = "Hello Word";
document.body.append(p)
console.log(p)

document.body.innerText = "<p class='titulo'>hello word</p>"