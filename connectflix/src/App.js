import React from "react";

import dadosIniciais from "./data/dados_iniciais.json";

import Header from "./components/Header";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "O que é Front-End e os desafios de se trabalhar na Área"
        }
      />

      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
