import React, { Component } from "react";

//importar title component
import Title from "./title";

//importar React-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

/*classe para apresentar os serviços ofertados*/
export default class service extends Component {
  //array de estado dos serviços
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Coquitéis gratuitos",
        info: "bla bla bla bla bla",
      },
      {
        icon: <FaHiking />,
        title: "Caminhadas sem fim",
        info: "bla bla bla bla bla",
      },
      {
        icon: <FaShuttleVan />,
        title: "Transporte gratuito",
        info: "bla bla bla bla bla",
      },
      {
        icon: <FaBeer />,
        title: "Melhores cervejas",
        info: "bla bla bla bla bla",
      },
    ],
  };
  render() {
    //filtrar o array de serviços pela funçao map, pegando seu index
    return (
      <section className="services">
        <Title title="serviços" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
