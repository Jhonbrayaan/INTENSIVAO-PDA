import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

CarrinhoController(app, db);
ProdutoController(app, db);
UsuarioController(app, db);

import CarrinhoController from "./controllers/CarrinhoController.js";
import ProdutoController from "./controllers/ProdutoController.js";
import UsuarioController from "./controllers/UsuarioController.jsS";


export default app;