import Express  from "express";

// instancia sempre me retorna o produto final

 const app = Express()

 // ouvinte de porta

 const port = 3000;
 app.listen(port, () => {
  console.log("Api online na porta: http://localhost:3000")
 })

 // Middlewares = meio de campo, algo que fica ali no meio...

 app.use(Express.json())

 // Gargalho

app.use(() =>{})


 // Não posso, 2 rotas iguais para verbos iguais - NOT
 // CRUD - index

 // Read = GET (pegar) / caminho "/" (main ou index) rota principal

 app.get("/", (request, response) => {
  response.send("Olá")
 })

 // Creat = POST (criar)

 app.post("/", (request, response) => {
  response.send(`usuario ${request.body.nome} foi criada com sucesso`)
 })

 // Update = PUT (atualizar)

 app.put("/", (request, response) => {
  response.send("Usuario atualizado")
 })

 // Delete = delete (deletando)

 app.delete("/", (request, response) => {
  response.send("Usuario deletado")
 })






