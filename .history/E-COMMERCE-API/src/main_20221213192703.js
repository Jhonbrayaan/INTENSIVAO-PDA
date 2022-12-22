import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

CarrinhoController(app, db);
ProdutoController(app, db);
UsuarioController(app, db);

import CarrinhoController from "./controllers/CarrinhoController";
import ProdutoController from "./controllers/ProdutoController";
import UsuarioController from "./controllers/UsuarioController";


export default app;