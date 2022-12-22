import sqlite3 from "sqlite3";
import path from "path";
const caminhoArq = path.resolve("./src/database/", "database.db");

const db = new sqlite3.Database(caminhoArq);

const pragma = `PRAGMA foreign_keys = ON`;

function enableForeignKey() {
  db.run(pragma, (error) => {
    if (error) console.log("Error in process of creation exec 'pragma'");
  });
}

//==== Usuários
const Usuarios_SCHEMA = `
CREATE TABLE Usuarios (
    id INT(50) PRIMARY KEY,
    nome VARCHAR(80),
    email VARCHAR(80),
    senha VARCHAR(100)
)`;

function CreateTableUsuarios() {
  db.run(Usuarios_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}

//==== Carrinho
const Carrinho_SCHEMA = `
CREATE TABLE Carrinho (
    id INT(50) PRIMARY KEY,
    U INT(80),
    descricao INT(80),
    valor FLOAT(100)
)`;

function CreateTableProduto() {
  db.run(Produto_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}

//==== Produto
const Produto_SCHEMA = `
CREATE TABLE Produto (
    id INT(50) PRIMARY KEY,
    titulo VARCHAR(80),
    descricao VARCHAR(80),
    valor FLOAT(100)
)`;

function CreateTableProduto() {
  db.run(Produto_SCHEMA, (error) => {
    if (error) console.log(error);
  });
}



db.serialize(() => {
  enableForeignKey();
  CreateTableUsuarios();
  CreateTableProduto();
});
