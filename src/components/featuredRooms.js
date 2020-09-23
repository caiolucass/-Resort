import React, { Component } from "react";

/*Importar o todo o context*/
import { RoomContext } from "../context";

/*Importar Loading*/
import Loading from "./loading";

/*Importar Quarto*/
import Room from "./room";

/*Importar o Titulo*/
import Title from "./title";

export default class featuredRooms extends Component {
  static contextType = RoomContext;

  /*retornar cada quarto pelo id do quarto*/
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    /*retornar os quantos disponíveis se for igual a true*/
    return (
      <section className="featured-rooms">
        <Title title="Quartos disponíveis" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
