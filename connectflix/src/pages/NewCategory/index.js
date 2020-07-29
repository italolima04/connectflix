import React from "react";
import { Link } from "react-router-dom";

import Default from "../../components/Default";

export default function NewCategory() {
  return (
    <>
      <Default>
        <h1>Cadastrar Nova Categoria</h1>

        <Link to="/">Ir para Home </Link>
      </Default>
    </>
  );
}
