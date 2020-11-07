import React, { useEffect } from "react";
import { NotFound } from "../components";

export function NotFoundContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <NotFound>
      <NotFound.Card>
        <NotFound.Img src={require("../images/misc/error.svg")} />
        <NotFound.Text>Essa pagina não existe</NotFound.Text>
      </NotFound.Card>
    </NotFound>
  );
}
