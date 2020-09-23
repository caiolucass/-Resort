import React, { Component } from "react";
import { RoomContext } from "../context";

/*Importar o Styled-Hero*/
import StyledHero from "../components/styledHero";

/*Importar imagem*/
import defaultBcg from "../images/room-1.jpeg";

/*Importar Hero*/
import Hero from "../components/hero";

/*Importar Banner*/
import Banner from "../components/banner";

/*Importar Link*/
import { Link } from "react-router-dom";

export default class singleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  //acessar o "contextType"
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    /*se o quarto for igual a indefinido*/
    if (!room) {
      return (
        <div className="error">
          <h3>Nenhum quarto pôde ser encontrado...</h3>
          <Link to="/rooms" className="btn-primary">
            Voltar para os quartos
          </Link>
        </div>
      );
    }
    /*destructing do que será retornado caso o quarto nao seja indefinido*/
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Voltar para os quartos
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Detalhes</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Informações</h3>
              <h6>Preço: ${price}</h6>
              <h6>Tamanho: {`${size} metros`}</h6>
              <h6>
                Capacidade:{" "}
                {capacity > 1 ? `${capacity} pessoas` : `${capacity} pessoa`}
              </h6>
              <h6>
                Animais:{" "}
                {pets ? "animais permitidos" : "animais não permitidos"}
              </h6>
              <h6>Café da manha: {breakfast && "café da manhã incluido"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
