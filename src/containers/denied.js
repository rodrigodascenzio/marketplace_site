import React, { useEffect } from "react";
import { NotFound } from "../components";

export function DeniedContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NotFound>
      <NotFound.Card>
        <NotFound.Img src={require("../images/misc/Security.svg")} />
        <NotFound.Text>Usuário não cadastrado no programa de afiliados..</NotFound.Text>
        <NotFound.SubText>Entre em contato através do email: afiliado@nuppin.com</NotFound.SubText>
      </NotFound.Card>
    </NotFound>
  );
}
