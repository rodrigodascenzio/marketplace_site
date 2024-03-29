import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { jumbo1 } from "../fixtures/jumbo";
import { faq1 } from "../fixtures/faqs";

export default function Home() {
  return (
    <>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
        <Feature>
          <Feature.Title>Pensado para o pequeno e micro empreendedor</Feature.Title>
          <Feature.SubTitle>Venda com a gente, no seu dominio próprio ou aplicativo. Muito simples!</Feature.SubTitle>
          <OptForm.Button />
        </Feature>
      </HeaderContainer>

      <JumbotronContainer jumbo={jumbo1} />
      <FaqsContainer faq={faq1} />
      <FooterContainer />
    </>
  );
}
