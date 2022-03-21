import react from "react";
import PageTemplate from "../PageTemplate";
import styled from "styled-components";
import Formulario from "../..//components/formulario/Formulario";

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: var(--color-slate-gray);
`;

const Lista = styled.div`
  width: 100%;
  background-color: var(--color-slate-gray);
`;

const TitlePreview = styled.h1`
  color: var(--color-white);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <PageTemplate>
      <Content>
        <Lista> 
          <TitlePreview>Sua lista de contatos </TitlePreview>
          <Formulario />
        </Lista>
      </Content>
    </PageTemplate>
  );
}

export default Home;
