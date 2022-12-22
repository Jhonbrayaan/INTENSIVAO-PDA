import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function getApi() {
    const dados = await axios.get("http://localhost:3000/");
    setUsuarios(dados.data);
  }

  async function deleteApi(id) {
    await axios.delete(`http://localhost:3000/${id}`);
  }

  async function postApi() {
    await axios.post("http://localhost:3000/", { nome, email, senha });
  }

  useEffect(() => getApi);

  return (
    <div className="App">
      <ul>
        {usuarios.map((elemento) => (
          <li key={elemento?.id}>
            <p>Nome: {elemento.nome}</p> <p> Email:{elemento.email}</p>
            <button onClick={() => deleteApi(elemento.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          placeholder="nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={postApi}>Adicionar usuario</button>
      </form>
    </div>
  );
}

export default App;
