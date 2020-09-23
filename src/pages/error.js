import React from "react";

//importar componentes
import Hero from "../components/hero";
import Banner from "../components/banner";

//importar link
import { Link } from "react-router-dom";

/*Importar icone do react-icons*/
import { FaSadCry } from "react-icons/fa";

export default function error() {
  return (
    <Hero>
      <Banner
        title={<FaSadCry className="icon-error" />}
        subtitle="Desculpe. essa página não existe!"
      >
        <Link to="/" className="btn-primary">
          Voltar para a home
        </Link>
      </Banner>
    </Hero>
  );
}
