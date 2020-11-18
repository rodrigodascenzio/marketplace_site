import React, { useContext, useH } from "react";
import { Container, Button, ButtonDefault } from "./styles/opt-form";
import * as ROUTES from "../../constants/routes";
import { Context } from "../../store/Store";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Button = function OptFormButton({ ...restProps }) {
  const { state } = useContext(Context);
  const { domain } = state;
  const url =
    domain === ROUTES.PARCEIRO
      ? "https://play.google.com/store/apps/details?id=com.nuppin.company"
      : "https://play.google.com/store/apps/details?id=com.nuppin";
  return (
    <Button
      src={require("../../images/misc/google-play-badge.png")}
      onClick={() => window.open(url, "_blank")}
      {...restProps}
    />
  );
};

OptForm.ButtonDefault = function OptFormButton({ children, ...restProps }) {
  return (
    <ButtonDefault {...restProps} href={ROUTES.SIGN_IN}>
      {children}
    </ButtonDefault>
  );
};
