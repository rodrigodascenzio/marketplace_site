import React from "react";
import { Container, Input, Break, Button, Text } from "./styles/opt-form";
import * as ROUTES from "../../constants/routes";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = React.forwardRef((restProps, ref) => {
  return <Input ref={ref} {...restProps} />;
});

OptForm.Button = function OptFormButton({ ...restProps }) {
  const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;
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

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
