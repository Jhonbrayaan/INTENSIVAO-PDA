import Express  from "express";

// instancia sempre me retorna o produto final

 const app = Express()

 // ouvinte de porta

 const port = 3000;
 app.listen(port, () => {
  console.log("Api online na porta: http://localhost:3000")
 })

 // Não posso, 2 rotas iguais para verbos iguais - NOT
 // CRUD

 // Read = GET / caminho "/" (main ou index) rota principal

 app.get("/", (request, response) => {
  response.send("Olá")
 })

 // Creat = POST

 app.post("/", (request, response) => {
  response.send("Usuario Criado")
 })

 // Update = PUT

 app.put("/", ())