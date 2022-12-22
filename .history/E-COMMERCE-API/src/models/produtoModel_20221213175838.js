import { v4 as uuidv4 } from "uuid";

class Produtos {
  constructor(titulo, descricao, valor) {
    this.id = uuidv4();
    this.titulo = titulo;
    this.descricao = descricao;
    this.valor = (valor);
  }
}

export default Produtos;