import { Router } from "express";
import { createTable, insertCarrinho,updateCarrinho,selectCarrinhos,selectCarrinho,deleteCarrinho } from '../Controllers/Carrinhos.js';


const routerCarrinhos = Router();


routerCarrinhos.get('/carrinhos',selecionCarrinhos);

routerCarrinhos.get('/carrinho',selectCarrinho);

routerCarrinhos.post('/carrinho', insertCarrinho);

routerCarrinhos.put('/carrinho', updateCarrinho);

routerCarrinhos.delete('/carrinho', deleteCarrinho);

export default routerCarrinhos;