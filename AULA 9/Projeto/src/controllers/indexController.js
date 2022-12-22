import User from "../models/userModel.js";
import UsersDAO from "../dao/UserDAO.js";

const indexController = (app, db) => {
  const newUsersDao = new UsersDAO(db);

  app.get("/", async (request, response) => {
    try {
      const usersData = await newUsersDao.pegarTodosDados();
      response.json(usersData);
    } catch (error) {
      response.status(400).send(error.message)
    }
  });

  app.post("/", async (request, response) => {
    try {
      const novoUsuario = new User(
        request.body.nome,
        request.body.email,
        request.body.senha
      );

      const newUserData = await newUsersDao.InserirDadoNovo(novoUsuario);
      response.status(201).json(newUserData);
    } catch (error) {
      response.status(400).send(error.message)
    }
  });

  app.put("/:id", (request, response) => {});

  app.delete("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const data = await newUsersDao.DeletarDado(id);
      response.send(data);
    } catch (error) {
      response.status(400).send(error.message)
    }
  });
};

export default indexController;
