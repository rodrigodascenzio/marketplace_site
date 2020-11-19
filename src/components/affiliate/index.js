import React from "react";
import { Container, Card, Title, Group, Item, InnerItem, Text, SubText } from "./styles/affiliate";

export default function Affiliate({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Affiliate.Card = function AffiliateCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Affiliate.Title = function AffiliateTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Affiliate.Text = function AffiliateText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Affiliate.SubText = function AffiliateSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Affiliate.Group = function AffiliateGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Affiliate.Item = function AffiliateItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Affiliate.InnerItem = function AffiliateInnerItem({ children, ...restProps }) {
  return <InnerItem {...restProps}>{children}</InnerItem>;
};
