import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

indexController(app, db);

import indexController from "./controllers/CarrinhoController"
import indexController from "./controllers/ProdutoController"


export default app;