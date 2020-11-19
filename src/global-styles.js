import { createGlobalStyle } from "styled-components";
import * as ROUTES from "./constants/routes";

const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:${domain === ROUTES.PARCEIRO ? "#000" : "#fff"};
  color: #333333;
  font-size: 16px;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  overflow-x:hidden;
  a{
      outline: none;
  }
}`;
