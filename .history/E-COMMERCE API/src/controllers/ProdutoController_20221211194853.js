import Produtos from "../models/produtoModel";

const ProdutoController = (app, db) => {
  app.get("/", (request, response) => {
    const SQL = `SELECT * FROM Produtos`;

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

  app.post("/", (request, response) => {
    const SQL = `INSERT INTO Usuarios(id, nome, email, senha) VALUES (?,?,?,?)`;

    const novoUsuario = new Usuarios(
      request.body.nome,
      request.body.email,
      request.body.senha
    );

    new Promise((resolve, reject) => {
      db.run(
        SQL,
        [
          novoUsuario.id,
          novoUsuario.nome,
          novoUsuario.email,
          novoUsuario.senha,
        ],
        (erro) => {
          if (!erro) {
            resolve("User inserted successfully");
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

export default ProdutoController;
