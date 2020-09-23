import React from "react";

/*Importar gif de loading*/
import loadingGif from "../images/gif/loading-arrow.gif";

export default function loading() {
  return (
    <div className="loading">
      <h4>carregando dados dos quartos...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}
