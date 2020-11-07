import React from "react";
import { Footer } from "../components";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row style={{ justifyContent: "space-between" }}>
          <Footer.Column>
            <Footer.Title>Sobre</Footer.Title>
            <Footer.Row>
              <Footer.Link to="/terms">Termos de uso</Footer.Link>
            </Footer.Row>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Redes Sociais</Footer.Title>
            <Footer.Row>
              <Footer.Link href="https://facebook.com/nuppinbr">
                <FaFacebook size="24" />
              </Footer.Link>
              <Footer.Link href="https://instagram.com/nuppinbr">
                <FaInstagram size="24" />
              </Footer.Link>
              {/* <Footer.Link href="#">
                <FaYoutube size="24" />
              </Footer.Link> */}
              {/* <Footer.Link href="https://twitter.com/nuppinbr">
                <FaTwitter size="24" />
              </Footer.Link> */}
              <Footer.Link href="https://linkedin.com/company/nuppin">
                <FaLinkedin size="24" />
              </Footer.Link>
            </Footer.Row>
          </Footer.Column>
        </Footer.Row>
        <Footer.Row>
          <Footer.Column>
            <Footer.Text>{`Nuppin. Todos os direitos reservados - 2020`}</Footer.Text>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
