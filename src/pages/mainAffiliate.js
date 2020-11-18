import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { jumbo3 } from "../fixtures/jumbo";
import { faq3 } from "../fixtures/faqs";

export default function Home() {
  return (
    <>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
        <Feature>
          <Feature.Title>Ganhe dinheiro com o nosso programa de afiliados</Feature.Title>
          <Feature.SubTitle>Gere uma receita recorrente, a melhor forma de fazer uma grana extra.</Feature.SubTitle>
          <OptForm.ButtonDefault>Cadastre-se</OptForm.ButtonDefault>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer jumbo={jumbo3} />
      <FaqsContainer faq={faq3} />
      <FooterContainer />
    </>
  );
}
