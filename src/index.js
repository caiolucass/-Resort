/*Importar react e react-dom*/
import React from "react";
import ReactDOM from "react-dom";

/*Importar a class App*/
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*Importar as rotas e os links*/
import { BrowserRouter as Router } from "react-router-dom";

/*Importar o provedor de quartos*/
import { RoomProvider } from "./context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
