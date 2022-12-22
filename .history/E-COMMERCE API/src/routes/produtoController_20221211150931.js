import { Router } from "express";
import { createTable, inserindoProduto, atualizandoProduto, selecionandoProdutos, selecionandoProduto, deletandoProduto } from '../Controllers/Produtos.js';

const routerProdutos = Router();

//buscar todos os usuarios:
routerProdutos.get('/produtos', selecionandoProdutos);
//buscar um usuario por id:
routerProdutos.get('/produto', selecionandoProduto);

routerProdutos.post('/produto', inserindoProduto);

routerProdutos.put('/produto', atualizandoProduto);

routerProdutos.delete('/produto', deletandoProduto);

export default routerProdutos;