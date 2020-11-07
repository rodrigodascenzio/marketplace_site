import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;

export function HeaderContainer({ children, bg }) {
  return (
    <Header src={bg} bg={bg ? true : false}>
      <Header.Frame>
        <Header.Group>
          <Header.Logo
            to={ROUTES.HOME}
            src={
              domain === ROUTES.NUPPIN
                ? require("../images/misc/nuppin.png")
                : require("../images/misc/company_nuppin.png")
            }
            alt=""
          />
        </Header.Group>
        {domain === ROUTES.NUPPIN && (
          <Header.Group>
            <Header.ButtonLink href={ROUTES.PARCEIRO_SITE}>Seja um parceiro</Header.ButtonLink>
          </Header.Group>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
