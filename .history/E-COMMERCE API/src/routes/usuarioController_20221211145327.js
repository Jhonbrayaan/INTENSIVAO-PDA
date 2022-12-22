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

routerUsuarios.post('/usuario', insertUsuario);

routerUsuarios.put('/usuario', updateUsuario);

routerUsuarios.delete('/usuario', deleteUsuario);

routerUsuarios.get('/login',checarSeLogado);
export default routerUsuarios;