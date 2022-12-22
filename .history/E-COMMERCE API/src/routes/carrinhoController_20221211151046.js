import { Router } from "express";
import { createTable, insertCarrinho, updateCarrinho, selectCarrinhos, selectCarrinho, deletandoCarrinho } from '../Controllers/Carrinhos.js';


const routerCarrinhos = Router();


routerCarrinhos.get('/carrinhos', selecionandoCarrinhos);

routerCarrinhos.get('/carrinho', selecionandoCarrinho);

routerCarrinhos.post('/carrinho', inserindoCarrinho);

routerCarrinhos.put('/carrinho', atualizandoCarrinho);

routerCarrinhos.delete('/carrinho', deletandoCarrinho);

export default routerCarrinhos;