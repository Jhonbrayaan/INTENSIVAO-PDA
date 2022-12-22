import { Router } from "express";
import { createTable, inserindoProduto, atualizandoProduto, selecionandoProdutos, selecionandoProduto, deletandoProduto } from '../Controllers/Produtos.js';

const routerProdutos = Router();

//buscar todos os usuarios:
routerProdutos.get('/produtos', selecionandoProdutos);
//buscar um usuario por id:
routerProdutos.get('/produto', selecionandoProduto);
//adicionar:
routerProdutos.post('/produto', inserindoProduto);
//alterar pelo id:
routerProdutos.put('/produto', atualizandoProduto);

routerProdutos.delete('/produto', deletandoProduto);

export default routerProdutos;