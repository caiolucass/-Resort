import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

//definir as propriedades da funcao Hero
Hero.defaultProps = {
  hero: "defaultHero",
};
