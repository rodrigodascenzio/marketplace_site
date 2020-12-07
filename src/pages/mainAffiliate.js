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
          <Feature.Title>Monte sua carteira de clientes vendendo online</Feature.Title>
          <Feature.SubTitle>
            Encontre clientes, administre seus contatos, gerencie sua conta e receba comissão de forma recorrente.
          </Feature.SubTitle>
          <OptForm.ButtonDefault>ENTRAR</OptForm.ButtonDefault>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer jumbo={jumbo3} />
      {/* <FaqsContainer faq={faq3} /> */}
      <FooterContainer />
    </>
  );
}
