class UserDAO {
  constructor(banco) {
    this.db = banco;
  }

  pegarTodosDados() {
    const SQL = `SELECT * FROM users`;

    return new Promise((resolve, reject) => {
      this.db.all(SQL, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }

  InserirDadoNovo(novoUsuario) {
    const SQL = `INSERT INTO users(id, nome, email, senha) VALUES (?,?,?,?)`;

    return new Promise((resolve, reject) => {
      this.db.run(
        SQL,
        [
          novoUsuario.id,
          novoUsuario.nome,
          novoUsuario.email,
          novoUsuario.senha,
        ],
        (erro) => {
          if (!erro) {
            resolve(novoUsuario);
          } else {
            reject(erro);
          }
        }
      );
    });
  }

  DeletarDado(id) {
    const SQL = "DELETE FROM users WHERE id = ?";

    return new Promise((res, rej) => {
      this.db.run(SQL, id, (erro) => {
        if (!erro) {
          res("Usuario deletado com sucesso");
        } else {
          rej(erro);
        }
      });
    });
  }
}


export default UserDAO;
