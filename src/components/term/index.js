import React from "react";
import { Container, Card, Title, Text } from "./styles/term";

export default function Term({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Term.Card = function TermCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Term.Title = function TermTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Term.Text = function TermText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
