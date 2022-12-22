import Express from "express";
import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/config.";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

import indexController from "./controllers/indexController.js";

indexController(app, db);

export default app;
