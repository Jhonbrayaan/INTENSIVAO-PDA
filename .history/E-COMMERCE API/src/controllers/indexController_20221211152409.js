import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT)'
        )
    })
}
//rotas get checar se é com usuarios ou usuario////selectUsuarios pq essa função irá mostrar todos os usuarios da tabela
export async function selectUsuarios(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM Usuarios')
                .then(usuarios => res.json(usuarios))
        })
}
//busca por id
export async function selectUsuario(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM Usuarios WHERE id=?', [id])
                .then(usuarios => res.json(usuarios))
        })
}
//InsertUsuario está no singular porque vai adicionar um Usuario na tabela Usuarios.
export async function insertUsuario(req, res) {
    let usuarios = req.body;
    openDb()
        .then(db => {
            db.run('INSERT INTO Usuarios (nome, email, senha) VALUES (?,?,?)', [usuarios.nome, usuarios.email, usuarios.senha])
        });
    res.json({
        "statuscode": 200
    })
}
export async function updateUsuario(req, res) {
    let usuarios = req.body;
    openDb()
        .then(db => {
            db.run('UPDATE Usuarios SET nome=?, email=?, senha=? WHERE id=?', [usuarios.nome, usuarios.email, usuarios.senha, usuarios.id])
        });
    res.json({
        "statuscode": 200
    })

}
export async function deleteUsuario(req, res) {
    let id = req.body.id;
    openDb()
        .then(db => {
            db.get('DELETE FROM Usuarios WHERE id=?', [id])
                .then(res => res)
        })
    res.json({
        "statuscode": 200
    })
}
export async function checarSeLogado(req, res) {
    let email = req.body.email;
    let senha = req.body.senha;
    openDb()
        .then(db => {
            db.get('SELECT * FROM Usuarios WHERE email=? AND senha=?', [email, senha])
            .then(usuarios => usuarios?res.json(usuarios):res.json({"Error":"não possui o usuário buscado"}))
        })
}

export async function createTable() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Produtos (id INTEGER PRIMARY KEY, titulo TEXT, descricao TEXT, valor REAL)'
        )
    })
}
export async function selectProdutos(req, res) {
    openDb().then(db => {
        db.all(
            'SELECT * FROM Produtos'
        ).then(produtos => res.json(produtos))
    })
}
export async function selectProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM Produtos WHERE id=?', [id])
            .then(produto => res.json(produto))
    })
}
export async function insertProduto(req, res) {
    let produtos = req.body;
    openDb().then(db => {
        db.run(
            'INSERT INTO Produtos (titulo, descricao, valor) VALUES (?,?,?)', [produtos.titulo, produtos.descricao, produtos.valor]
        )
    })
    res.json({
        "statuscode": 200
    })
}
export async function updateProduto(req, res) {
    let produtos = req.body;
    openDb().then(db => {
        db.run(
            'UPDATE Produtos SET titulo=?, descricao=?, valor=? WHERE id=? ', [produtos.titulo, produtos.descricao, produtos.valor, produtos.id]
        )
    })
    res.json({
        "statuscode": 200
    })
}
export async function deleteProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM Produtos WHERE id=?', [id])
            .then(res => res)
    })
    res.json({
        "statuscode": 200
    })
}