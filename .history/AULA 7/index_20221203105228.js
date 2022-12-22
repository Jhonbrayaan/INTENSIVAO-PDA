import Express  from "express";

// instancia sempre me retorna o produto final

 const app = Express()

 // ouvinte de porta

 const port = 3000;
 app.listen(port, () => {
  console.log("Api online na porta: http://localhost:3000")
 })

 // CRUD
 
 // Read = GET

 app