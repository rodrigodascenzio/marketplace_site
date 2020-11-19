import React, { useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { Context } from "../store/Store";
import { useHistory } from "react-router-dom";

export function HeaderContainer({ children, bg, ...restProps }) {
  const { state } = useContext(Context);
  const { domain, user } = state;
  const history = useHistory();

  function handleClickBalance() {
    history.push(ROUTES.BALANCE);
  }

  function handleClickAffiliate() {
    history.push(ROUTES.AFFILIATES_STORE);
  }

  function handleClickProfile() {
    history.push(ROUTES.PROFILE);
  }

  return (
    <Header src={bg} bg={bg ? true : false}>
      <Header.Frame>
        <Header.Group>
          <Header.Logo
            to={ROUTES.HOME}
            src={
              domain === ROUTES.PARCEIRO
                ? require("../images/misc/company_nuppin.png")
                : require("../images/misc/nuppin.png")
            }
            alt=""
          />
        </Header.Group>
        {domain === ROUTES.NUPPIN && (
          <Header.Group>
            <Header.ButtonLink href={ROUTES.PARCEIRO_SITE}>Seja um parceiro</Header.ButtonLink>
          </Header.Group>
        )}
        {domain === ROUTES.AFFILIATE && (
          <Header.Group>
            {user ? (
              <>
                <Header.OrderIcon
                  size="24"
                  onClick={handleClickAffiliate}
                  nav={document.location.pathname === ROUTES.ORDERS}
                />
                <Header.CartIcon
                  size="24"
                  onClick={handleClickBalance}
                  nav={document.location.pathname === ROUTES.CART}
                />

                <Header.Profile onClick={handleClickProfile}>
                  <Header.Picture src={user.photo} nav={document.location.pathname === ROUTES.PROFILE} />
                </Header.Profile>
              </>
            ) : !restProps.isInLoginProcess ? (
              <Header.ButtonLink to={ROUTES.SIGN_IN}>Entrar</Header.ButtonLink>
            ) : (
              ""
            )}
          </Header.Group>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
