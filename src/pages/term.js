import React from "react";
import { TermContainer } from "../containers/term";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

export default function Term() {
  return (
    <>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
        <TermContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
