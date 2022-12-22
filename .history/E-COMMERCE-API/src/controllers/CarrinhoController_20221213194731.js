import Carrinho from "../models/carrinhoModel.js";

const CarrinhoController = (app, db) => {
  app.get("/", (request, response) => {
    const SQL = `SELECT * FROM Carrinho`;

    new Promise((resolve, reject) => {
      db.all(SQL, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    })
      .then((result) => response.json(result))
      .catch((erro) => console.log(erro));
  });

  app.get("/:id", (request, response) => {});

  app.post("/", (request, response) => {
    const SQL = `INSERT INTO Carrinho(id, usuario_id, produto_id, status) VALUES (?,?,?,?)`;

    const carrinho = new Carrinho(
      request.body.usuario_id,
      request.body.produto_id,
      request.body.status
    );

    new Promise((resolve, reject) => {
      db.run(
        SQL,
        [
          carrinho.id,
          carrinho.usuario_id,
          carrinho.produto_id,
          carrinho.status,
        ],
        (erro) => {
          if (!erro) {
            resolve("Your shoppings");
          } else {
            reject(erro);
          }
        }
      );
    })
      .then((result) => response.send(result))
      .catch((erro) => console.log(erro));
  });

  app.put("/:id", (request, response) => {});

  app.delete("/", (request, response) => {});
};

export default CarrinhoController;