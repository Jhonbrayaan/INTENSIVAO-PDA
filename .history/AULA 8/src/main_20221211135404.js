import Express from "express";
import cors from "cors";

// Instancia sempre me retorna o Produto final
const app = Express();

// Middlewares
import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

// Banco
import db from "./database/sqlite.js"

// Rotas
import indexController from "./controllers/indexController.js";

indexController(app, db);

export default app;
