/*Importar styled-components*/
import styled from "styled-components";

/*Importar imagem*/
import defaultImg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  /*caso a imagem nao carregue*/
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
