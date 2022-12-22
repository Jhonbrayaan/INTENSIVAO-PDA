import { v4 as uuidv4 } from "uuid";


class Carrinho {
  constructor(user, produto, status) {
    this.id = uuidv4();
    this.usuario_id = user;
    this.produto_id = produto;
    this.status = (status);
  }
}

export default Carrinho;