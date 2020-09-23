import React from "react";

/*Importar estilo da pagina*/
import "./App.css";

/*Importar as rotas e o switch de rotas*/
import { Route, Switch } from "react-router-dom";

/*Importar as páginas do site*/
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Login from "./pages/login";
import Error from "./pages/error";

/*Importar os componentes das páginas*/
import NavBar from "./components/navBar";
// import Footer from "./components/footer";

/*criar as rotas da aplicação*/
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
