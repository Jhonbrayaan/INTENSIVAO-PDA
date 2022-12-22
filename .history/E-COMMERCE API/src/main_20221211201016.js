import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

import UsuarioController from "./";

indexController(app, db);

export default app;
