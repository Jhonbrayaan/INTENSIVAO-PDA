import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

import indexController from "./controllers/indexController.js";

indexController(app, db);

import routerUsuarios from './routers/UsuariosRouters.js';
import routerProdutos from './routers/produtosRouter.js';
import routerCarrinhos from './routers/carrinhoController.js';

export default app;