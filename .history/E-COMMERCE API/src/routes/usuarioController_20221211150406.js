import { Router } from "express";
import { createTable, insertUsuario,updateUsuario,selectUsuarios,selectUsuario,deleteUsuario,checarSeLogado } from '../Controllers/Usuarios.js';

const routerUsuarios = Router();

routerUsuarios.get('/',(req,res)=>{
    res.json({
        "statusCode": 200,
        "msg":"API running (🚀🚀🚀) "
    })

})

routerUsuarios.get('/usuarios',selectUsuarios);

routerUsuarios.get('/usuario',selectUsuario);

routerUsuarios.post('/usuario', insertUsuario);

routerUsuarios.put('/usuario', updateUsuario);

routerUsuarios.delete('/usuario', deletandoUsuario);

routerUsuarios.get('/login',userLogado);
export default routerUsuarios;