// AS ROTAS, controlar



app.get('/', (request, response) => {
  response.send('Olá')
})

// Creat = POST (criar)

app.post('/', (request, response) => {
  response.send(`usuario ${request.body.nome} foi criada com sucesso`)
})

// Update = PUT (atualizar)

app.put('/', (request, response) => {
  response.send('Usuario atualizado')
})

// Delete = delete (deletando)

app.delete('/', (request, response) => {
  response.send('Usuario deletado')
})
