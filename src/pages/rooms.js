import React from "react";

/*importar componentes*/
import Hero from "../components/hero";
import Banner from "../components/banner";

/*importar link*/
import { Link } from "react-router-dom";

/*Importar roomsContainer*/
import RoomsContainer from "../components/roomsContainer";

const rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="nossos quartos">
          <Link to="/" className="btn-primary">
            Voltar para home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </React.Fragment>
  );
};

export default rooms;
