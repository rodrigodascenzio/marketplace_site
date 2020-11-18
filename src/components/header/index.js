import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Group,
  ButtonLink,
  Logo,
  Background,
  OrderIcon,
  CartIcon,
  PersonIcon,
  Profile,
  Picture,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return restProps.bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.OrderIcon = function HeadeOrderIcon({ ...restProps }) {
  return <OrderIcon {...restProps} />;
};

Header.CartIcon = function HeaderCartIcon({ ...restProps }) {
  return <CartIcon {...restProps} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ ...restProps }) {
  if (!restProps.src) {
    return <PersonIcon size="24" {...restProps} />;
  }
  return <Picture {...restProps} />;
};
