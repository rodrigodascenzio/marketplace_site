import React from "react";
import { Feature, OptForm, Wrapper } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { AffiliateContainer } from "../containers/affiliate";
import { jumbo3 } from "../fixtures/jumbo";
import { faq3 } from "../fixtures/faqs";

export default function AffiliateStore() {
  return (
    <>
      <Wrapper>
        <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
          <AffiliateContainer />
        </HeaderContainer>
        <FooterContainer />
      </Wrapper>
    </>
  );
}
