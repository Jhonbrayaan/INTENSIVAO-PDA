import { Router } from "express";
import { createTable, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from '../Controllers/Produtos.js';

const routerProdutos = Router();

//buscar todos os usuarios:
routerProdutos.get('/produtos',selectProdutos);
//buscar um usuario por id:
routerProdutos.get('/produto',selectProduto);
//adicionar:
routerProdutos.post('/produto', insertProduto);
//alterar pelo id:
routerProdutos.put('/produto', updateProduto);
//deletar um usuario pelo id (cheque na rota de ver todos os usuarios):
routerProdutos.delete('/produto', deletandoProduto);

export default routerProdutos;