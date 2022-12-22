import { v4 as uuidv4 } from "uuid";
import CarrinhoModel from "../controllers/Carrinho";

class Carrinho {
  constructor(user, produto, status) {
    this.id = uuidv4();
    this.usuario_id = user;
    this.produto_id = produto;
    this.status = (status);
  }
}

export default CarrinhoModel;