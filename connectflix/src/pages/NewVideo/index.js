import React from "react";
import { Link } from "react-router-dom";

import Default from "../../components/Default";

export default function NewVideo() {
  return (
    <>
      <Default>
        <h1>Cadastrar Novo Vídeo</h1>

        <Link to="categoria">Cadastrar Categoria</Link>
      </Default>
    </>
  );
}
