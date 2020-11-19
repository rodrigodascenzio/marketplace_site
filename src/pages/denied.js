import React from "react";
import { DeniedContainer } from "../containers/denied";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

export default function NotFound() {
  return (
    <>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
        <DeniedContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
