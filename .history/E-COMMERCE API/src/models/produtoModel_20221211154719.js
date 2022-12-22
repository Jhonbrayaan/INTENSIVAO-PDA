class Produtos {
  constructor(titulo, descricao, valor) {
    this.id = uuidv4();
    this.titulo = titulo;
    this.descricao = descricao;
    this.valor = (valor);
  }
}

export default Produtos