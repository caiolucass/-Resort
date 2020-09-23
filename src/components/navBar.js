import React, { Component } from "react";

/*Importar Logo do site*/
import Logo from "../images/logo.svg";

/*Importar icone do react-icons*/
import { FaAlignRight } from "react-icons/fa";

/*Importar Link para a nav-bar*/
import { Link } from "react-router-dom";

export default class navBar extends Component {
  state = {
    isOpen: false,
  };

  /*função para abrir o botão toggle*/
  handleToogle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" onClick={this.handleToogle} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Quartos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
