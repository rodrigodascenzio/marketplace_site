import React from "react";
import { Container, Error, Title, Text, TextSmall, Submit } from "./styles/balance";

export default function Balance({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Balance.Error = function BalanceError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Balance.Title = function BalanceTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Balance.Text = function BalanceText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Balance.TextSmall = function BalanceTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Balance.Submit = function BalanceSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
