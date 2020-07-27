import React from "react";
import Logo from "../../assets/Logo-2.png";
import "./styles.css";

import Button from "../../components/Button";
//import ButtonLink from "./components/ButtonLink";

function Header() {
  return (
    <nav className="Header">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo da Aplicação" />
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Header;
