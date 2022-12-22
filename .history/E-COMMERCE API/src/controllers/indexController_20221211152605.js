import { openDb } from "../configDB.js";

export async function createTable1() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT)'
        )
    })
}

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

export async function createTable2() {
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

export async function createTable3() {
    openDb().then(db => {
        db.exec(
            'CREATE TABLE IF NOT EXISTS Carrinhos (id INTEGER PRIMARY KEY, usuario_id INTEGER,produto_id INTEGER,  status TEXT, FOREIGN KEY(usuario_id) REFERENCES Usuarios(id),FOREIGN KEY(produto_id) REFERENCES Produtos(id))'
        )
    })
}
export async function selectCarrinhos(req,res) {
    openDb().then(db => {
        db.all(
            'SELECT * FROM Carrinhos'
        ).then(carrinhos=>res.json(carrinhos))
    });
}
export async function selectCarrinho(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get(
            'SELECT * FROM Carrinhos WHERE id=?',[id]
        ).then(carrinho=>res.json(carrinho))
    });
}
export async function insertCarrinho(req,res) {
    let carrinhos = req.body;
    openDb().then(db => {
        db.run(
            'INSERT INTO Carrinhos ( usuario_id, produto_id,status) VALUES (?,?,?)', [carrinhos.usuario_id,carrinhos.produto_id,carrinhos.status]
        )
    });
    res.json({
        "statuscode": 200
    })
}
export async function updateCarrinho(req,res) {
    let carrinhos = req.body;
    openDb().then(db => {
        db.run(
            'UPDATE Carrinhos SET usuario_id=?, produto_id=?,status=? WHERE id=?', [carrinhos.usuario_id,carrinhos.produto_id,carrinhos.status,carrinhos.id]
        )
    });
    res.json({
        "statuscode": 200
    })
}
export async function deleteCarrinho(req,res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get(
            'DELETE FROM Carrinhos WHERE id=?',[id]
        ).then(res=>res)
    });
    res.json({
        "statuscode": 200
    })
}