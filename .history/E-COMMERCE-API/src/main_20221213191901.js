import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

CarrinhoController(app, db);
ProdutoController(app, db);
CarrinhoController(app, db);




export default app;