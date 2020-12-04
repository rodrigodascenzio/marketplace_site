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
        <NotFound.Text>Usuário não faz parte da equipe de vendas</NotFound.Text>
        <NotFound.SubText>Envie seu curriculo através do email: vagas@nuppin.com</NotFound.SubText>
      </NotFound.Card>
    </NotFound>
  );
}
