import React from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { RegisterContainer } from "../containers/register";
import { Wrapper } from "../components";

export default function Register() {
  return (
    <Wrapper>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")} isInLoginProcess={true}>
        <RegisterContainer />
      </HeaderContainer>
      <FooterContainer />
    </Wrapper>
  );
}
