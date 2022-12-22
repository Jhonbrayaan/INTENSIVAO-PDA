import Express from "express";
import cors from "cors";


const app = Express();

import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

import db from "./database/sqlite.js"

import UsuarioController from "./controllers/UsuarioController";
import ProdutoController <div class="form-check">
  <input class="form-check-input" type="radio" name="" id="">
  <label class="form-check-label" for="">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="" id="" checked disabled>
  <label class="form-check-label" for="">
    Default checked radio
  </label>
</div>

indexController(app, db);

export default app;
