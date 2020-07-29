import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/Logo-2.png";
import "./styles.css";

import Button from "../../components/Button";
//import ButtonLink from "./components/ButtonLink";

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da Aplicação" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Header;
