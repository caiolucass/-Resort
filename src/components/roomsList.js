import React from "react";

/*Importar Room*/
import Room from "./room";

export default function roomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Infelizmente não temos quartos para seu parâmetro de busca</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} rooms={item} />;
        })}
      </div>
    </section>
  );
}
