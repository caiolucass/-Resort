import React, { Component } from "react";

/*importar os dados locais*/
import Items from "./data/data.js";

const RoomContext = React.createContext();

/*classe para prover quartos "participantes"*/
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  /*Função para carregar os quartos*/
  componentDidMount() {
    let rooms = this.formatData(Items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  /*Função para mapear os quartos e seus atributos*/
  formatData(Itens) {
    //mapear cada "item" pelo seu id
    let tempItens = Items.map((item) => {
      let id = item.sys.id;
      //mapear cada imagem pela url
      let images = item.fields.images.map((image) => image.fields.file.url);
      //criar um novo objeto quarto
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItens;
  }

  /*Função para obeter os quartos*/
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

/*Consumidor de quartos "API"*/
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
