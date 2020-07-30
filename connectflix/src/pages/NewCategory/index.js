import React, { useState } from "react";
import { Link } from "react-router-dom";

import Default from "../../components/Default";
import FormField from "../../components/FormField";

export default function NewCategory() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute("name"), e.target.value);
  }

  return (
    <>
      <Default>
        <h1>Cadastrar Nova Categoria: {values.nome}</h1>

        <form
          onSubmit={function handleSubmit(e) {
            e.preventDefault();
            setCategorias([...categorias, values]);
            setValues(valoresIniciais);
          }}
        >
          <FormField
            label="Nome da Categoria"
            name="nome"
            type="text"
            value={values.nome}
            onChange={handleChange}
          />

          <label>
            <h3>Descrição para a Categoria</h3>
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>

          <FormField
            label="Cor Representativa"
            name="cor"
            type="color"
            value={values.cor}
            onChange={handleChange}
          />

          <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return <li key={`${categoria} ${indice}`}>{categoria.nome}</li>;
          })}
        </ul>

        <Link to="/">Ir para Home </Link>
      </Default>
    </>
  );
}
