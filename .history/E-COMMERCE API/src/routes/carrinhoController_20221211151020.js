import { Router } from "express";
import { createTable, insertCarrinho,updateCarrinho,selectCarrinhos,selectCarrinho,deleteCarrinho } from '../Controllers/Carrinhos.js';


const routerCarrinhos = Router();


routerCarrinhos.get('/carrinhos', selecionandoCarrinhos);

routerCarrinhos.get('/carrinho', selecionandoCarrinho);

routerCarrinhos.post('/carrinho', insertCarrinho);

routerCarrinhos.put('/carrinho', updateCarrinho);

routerCarrinhos.delete('/carrinho', deleteCarrinho);

export default routerCarrinhos;