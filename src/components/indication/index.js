import React from "react";
import { Container, Card, ContentBlock, Group, Title, Text, SubText, Item, InnerItem } from "./styles/indication";

export default function Indication({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Indication.Card = function IndicationCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Indication.ContentBlock = function IndicationContentBlock({ children, ...restProps }) {
  return <ContentBlock {...restProps}>{children}</ContentBlock>;
};

Indication.Group = function IndicationGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Indication.Title = function IndicationTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Indication.Text = function IndicationText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Indication.SubText = function IndicationSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Indication.InnerItem = function IndicationInnerItem({ children, ...restProps }) {
  return <InnerItem {...restProps}>{children}</InnerItem>;
};

Indication.Item = function IndicationItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
