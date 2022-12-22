import { Router } from "express";
import { createTable, insertUsuario,updateUsuario, selecionandoUsuarios, selecionandoUsuario, deletandoUsuario, userLogado } from '../Controllers/Usuarios.js';

const routerUsuarios = Router();

routerUsuarios.get('/',(req,res)=>{
    res.json({
        "statusCode": 200,
        "message":"API running (🚀🚀🚀) "
    })

})

routerUsuarios.get('/usuarios', selecionandoUsuarios);

routerUsuarios.get('/usuario', selecionandoUsuario);

routerUsuarios.post('/usuario', inserindoUsuario);

routerUsuarios.put('/usuario', atualizandoUsuario);

routerUsuarios.delete('/usuario', deletandoUsuario);

routerUsuarios.get('/login', userLogado);
export default routerUsuarios;