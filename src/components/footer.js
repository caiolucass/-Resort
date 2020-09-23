import React, { Component } from "react";

/*Importar icones*/
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-social">
          <a
            href="https://www.instagram.com/caio.lucasf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="nav-icon" />
          </a>
          <a
            href="https://github.com/caiolucass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="nav-icon" />
          </a>
          <a
            href="https://www.facebook.com/caiolucas.9803/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="nav-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-lucas-3886a4140/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="nav-icon" />
          </a>
          <a
            href="https://open.spotify.com/user/12155708920"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="nav-icon" />
          </a>
        </div>
        <p className="footer-copyright">
          Feito com <FaHeart color="#B51942" /> por Caio Lucas (cafox)
        </p>
      </footer>
    );
  }
}
