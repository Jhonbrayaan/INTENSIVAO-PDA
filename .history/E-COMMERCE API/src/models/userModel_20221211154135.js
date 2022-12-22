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
  constructor(nome, email, senha) {
    this.id = uuidv4();
    this.nome = nome;
    this.email = email;
    this.senha = sha256(senha);
  }
}

class Produtos {
  constructor(nome, email, senha) {
    this.id = uuidv4();
    this.titulo = nome;
    this.email = email;
    this.senha = sha256(senha);
  }
}

export default User;
