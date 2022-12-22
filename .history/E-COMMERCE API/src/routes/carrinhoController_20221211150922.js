import { Router } from "express";
import { createTable, insertCarrinho,updateCarrinho,selectCarrinhos,selectCarrinho,deleteCarrinho } from '../Controllers/Carrinhos.js';


const routerCarrinhos = Router();

//buscar todos os usuarios:
routerCarrinhos.get('/carrinhos',selectCarrinhos);
//buscar um usuario por id:
routerCarrinhos.get('/carrinho',selectCarrinho);
//adicionar:
routerCarrinhos.post('/carrinho', insertCarrinho);
//alterar pelo id:
routerCarrinhos.put('/carrinho', updateCarrinho);
//deletar um usuario pelo id (cheque na rota de ver todos os usuarios):
routerCarrinhos.delete('/carrinho', deleteCarrinho);

export default routerCarrinhos;