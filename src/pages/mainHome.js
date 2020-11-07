import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { jumbo2 } from "../fixtures/jumbo";
import { faq2 } from "../fixtures/faqs";

export default function Home() {
  return (
    <>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
        <Feature>
          <Feature.Title>Produtos, Alimentos e Serviços de Beleza</Feature.Title>
          <Feature.SubTitle>
            Encontre de um jeito simples e na plataforma mais parceira do micro e pequeno empreendedor
          </Feature.SubTitle>
          <OptForm.Button />
        </Feature>
      </HeaderContainer>

      <JumbotronContainer jumbo={jumbo2} />
      <FaqsContainer faq={faq2} />
      <FooterContainer />
    </>
  );
}
