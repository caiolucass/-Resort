import React from "react";

/*Importar RoomsFilter e RoomsList*/
import RoomsFilter from "./roomsFilter.js";
import RoomsList from "./roomsList";

/*Importar Room Container e Loading*/
import { withRoomConsumer } from "../context";
import Loading from "./loading";

function roomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      Hello from roomsContainer
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(roomsContainer);
