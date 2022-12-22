import { Router } from "express";
import { createTable, inseProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from '../Controllers/Produtos.js';

const routerProdutos = Router();

//buscar todos os usuarios:
routerProdutos.get('/produtos', selecionandoProdutos);
//buscar um usuario por id:
routerProdutos.get('/produto', selecionandoProduto);
//adicionar:
routerProdutos.post('/produto', inserindoProduto);
//alterar pelo id:
routerProdutos.put('/produto', atualizandoProduto);
//deletar um usuario pelo id (cheque na rota de ver todos os usuarios):
routerProdutos.delete('/produto', deletandoProduto);

export default routerProdutos;