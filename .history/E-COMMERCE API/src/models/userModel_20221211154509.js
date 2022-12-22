import { v4 as uuidv4 } from "uuid";
import { sha256 } from "js-sha256";

class Usuarios {
  constructor(nome, email, senha) {
    this.id = uuidv4();
    this.nome = nome;
    this.email = email;
    this.senha = sha256(senha);
  }
}

class Carrinho {
  constructor(user, produto, status) {
    this.id = uuidv4();
    this.usuario_id = user;
    this.produto_id = produto;
    this.status = (status);
  }
}

class Produtos {
  constructor(titulo, descricao, valor) {
    this.id = uuidv4();
    this.titulo = titulo;
    this.descricao = descricao;
    this.valor = (valor);
  }
}

export default Usuarios;
export default
