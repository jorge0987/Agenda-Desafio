import styled from "styled-components";
import Jorgeavatar from "../../../imagens/Jorgeavatar.svg";

const Section = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  border-radius: 5px;
`;
const Img = styled.img.attrs({src:Jorgeavatar, alt:"Jorge"})`
  background-color: #00bfff;
  background-image: (Jorgeavatar);
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
  border-radius: 50px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Title = styled.h1`
  color: var(--branco);
  font-size: 1.5rem;
`;

function NavBar() {
  return (
    <Section>
      <Img></Img>
      <Content>
        <Title>Agenda do Jorge</Title>
      </Content>
    </Section>
  );
}

export default NavBar;
