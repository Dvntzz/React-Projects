import React from "react";
import { useState } from "react";
import styles from "./styles.module.sass";
import { FiSearch } from "react-icons/fi";
import api from "../services/api";

function App() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState({});

  async function handleSearch() {
    //08340030/json

    if (cep === "") {
      alert("Digite o CEP!");
      return;
    }

    try {
      const response = await api.get(`${cep}/json`);
      console.log(response);
      setData(response.data);
      setCep("");
    } catch {
      alert("Ops, Erro ao buscar o CEP!");
      setCep("");
    }
  }
  return (
    //primeira div
    <div className={styles.container}>
      <h1 className={styles.title}>Buscador CEP</h1>
      <div className={styles.containerInput}>
        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button className={styles.buttonSearch}>
          <FiSearch
            size={25}
            color="#fff
          "
            onClick={() => handleSearch()}
          />
        </button>
      </div>
      {data.erro && (
        <main className={styles.main}>
          <h4>
            cep desconhecido! <br />
            <br />
            verifique se o cep que digitou está correto e contém apenas numeros!
          </h4>
        </main>
      )}
      {data.cep !== undefined && (
        <main className={styles.main}>
          <h2>CEP: {data.cep}</h2>
          <span>{data.logradouro}</span>
          {data.complemento ? <span>Complemento: {data.complemento}</span> : ""}
          <span>{data.bairro}</span>
          <span>
            {data.localidade} - {data.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
