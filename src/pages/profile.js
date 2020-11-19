import React from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { ProfileContainer } from "../containers/profiles";
import { Wrapper } from "../components";

export default function Profile() {
  return (
    <Wrapper>
      <HeaderContainer bg={require("../images/misc/misc_bk1.jpg")}>
        <ProfileContainer />
      </HeaderContainer>
      <FooterContainer />
    </Wrapper>
  );
}
