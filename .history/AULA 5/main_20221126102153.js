 let h1 = document.querySelector("#titulo")
 h1.textContent = "Ola"

 const p = document.createElement("p");
 const h1 = document.createElement("h1");
 h1.innertext = "Hello Word";
 p.appendChild(h1)
 document.body.append(p);


/document.body.innerText = "<p class='titulo'><h1>hello word</h1></p>"