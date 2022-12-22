import { Router } from "express";
import { createTable, insertUsuario,updateUsuario,selectUsuarios,selectUsuario,deleteUsuario,checarSeLogado } from '../Controllers/Usuarios.js';

const routerUsuarios = Router();

routerUsuarios.get('/',(req,res)=>{
    res.json({
        "statusCode": 200,
        "msg":"API rodando (ºuº) "
    })

})
//buscar todos os usuarios:
routerUsuarios.get('/usuarios',selectUsuarios);
//buscar um usuario por id:
routerUsuarios.get('/usuario',selectUsuario);
//adicionar:
routerUsuarios.post('/usuario', insertUsuario);
//alterar pelo id:
routerUsuarios.put('/usuario', updateUsuario);
//deletar um usuario pelo id (cheque na rota de ver todos os usuarios):
routerUsuarios.delete('/usuario', deleteUsuario);

routerUsuarios.get('/login',checarSeLogado);
export default routerUsuarios;