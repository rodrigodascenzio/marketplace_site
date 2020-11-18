import React from "react";
import { Feature, OptForm, Wrapper } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { IndicationContainer } from "../containers/indication";
import { jumbo3 } from "../fixtures/jumbo";
import { faq3 } from "../fixtures/faqs";

export default function Home() {
  return (
    <>
      <Wrapper>
        <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
          <IndicationContainer />
        </HeaderContainer>
        <FooterContainer />
      </Wrapper>
    </>
  );
}
