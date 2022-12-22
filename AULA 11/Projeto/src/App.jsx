import { useState } from "react";
import "./App.css";
import { Btn } from "./components/Btn/Btn.jsx";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  async function getApi() {
    const dados = await fetch("http://localhost:3000/");
    const jDados = await dados.json();
    setUsuarios(jDados);
  }

  return (
    <div className="App">
      <button onClick={getApi}>Busca</button>

      <ul>
        {usuarios.map((elemento) => (
          <li key={elemento.id}>
            <p>Nome: {elemento.nome}</p> <p> Email:{elemento.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
