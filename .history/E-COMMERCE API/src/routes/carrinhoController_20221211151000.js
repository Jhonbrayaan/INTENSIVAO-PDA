import { Router } from "express";
import { createTable, insertCarrinho,updateCarrinho,selectCarrinhos,selectCarrinho,deleteCarrinho } from '../Controllers/Carrinhos.js';


const routerCarrinhos = Router();

//buscar todos os usuarios:
routerCarrinhos.get('/carrinhos',selectCarrinhos);
//buscar um usuario por id:
routerCarrinhos.get('/carrinho',selectCarrinho);

routerCarrinhos.post('/carrinho', insertCarrinho);

routerCarrinhos.put('/carrinho', updateCarrinho);

routerCarrinhos.delete('/carrinho', deleteCarrinho);

export default routerCarrinhos;