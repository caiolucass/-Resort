import React from "react";

//importar componentes
import Hero from "../components/hero";
import Banner from "../components/banner";
import Services from "../components/service";
import FeaturedRooms from "../components/featuredRooms";

//importar link
import { Link } from "react-router-dom";

export default function home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="bem vindo"
          subtitle="Conheça nossos maravilhosos quartos"
        >
          <Link to="/rooms" className="btn-primary">
            Nossos Serviços
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
