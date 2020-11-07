import React from "react";
import { render } from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { ThemeProvider } from "styled-components";
import * as ROUTES from "./constants/routes";

const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;

console.log("fddddddddddddddddd", domain);
console.log("fddddddddddddddddds", document.location.host);

const nuppin = {
  primary_color: "#FF585D",
  primaryDark: "#c61c33",
  primaryLight: "#ff8c8a",
  feature_background: "#fafafa",
  feature_color: "#222",
  faq_border: "#e5e5e5",
  secondary_color: "#ff8c8a",
  faq_item: "#c7c7c7",
  radial_background:
    "radial-gradient(circle at 22% 15%, rgba(45, 45, 45,0.05) 0%, rgba(45, 45, 45,0.05) 50%,rgba(95, 95, 95,0.05) 50%, rgba(95, 95, 95,0.05) 100%),radial-gradient(circle at 83% 16%, rgba(122, 122, 122,0.05) 0%, rgba(122, 122, 122,0.05) 50%,rgba(194, 194, 194,0.05) 50%, rgba(194, 194, 194,0.05) 100%),radial-gradient(circle at 74% 7%, rgba(82, 82, 82,0.05) 0%, rgba(82, 82, 82,0.05) 50%,rgba(230, 230, 230,0.05) 50%, rgba(230, 230, 230,0.05) 100%),linear-gradient(90deg, rgb(243, 136, 126, 0.97),rgb(251, 43, 71, 0.99))",
};
const parceiro = {
  primary_color: "#FF585D",
  feature_background: "black",
  secondary_color: "#222",
  feature_background: "#000",
  faq_border: "#222",
  feature_color: "white",
  faq_item: "#303030",
  radial_background:
    "radial-gradient(circle at center left, rgb(46, 46, 46,0.97) 0%, rgb(46, 46, 46,0.97) 6%,rgb(41, 41, 41,0.97) 6%, rgb(41, 41, 41,0.97) 27%,rgb(36, 36, 36,0.97) 27%, rgb(36, 36, 36,0.97) 42%,rgb(31, 31, 31,0.97) 42%, rgb(31, 31, 31,0.97) 63%,rgb(25, 25, 25,0.97) 63%, rgb(25, 25, 25,0.97) 64%,rgb(20, 20, 20,0.97) 64%, rgb(20, 20, 20,0.97) 71%,rgb(15, 15, 15,0.97) 71%, rgb(15, 15, 15,0.97) 100%)",
};

const theme = domain === ROUTES.PARCEIRO ? parceiro : nuppin;

const seo_parceiro = {
  title: "Parceiro Nuppin",
  metaDescription: " Plataforma Nuppin Empresas",
  favicon: "../images/misc/company_nuppin.png",
};

const seo_nuppin = {
  title: "Nuppin",
  metaDescription: "Produto, Alimentos e Serviços de Beleza",
  favicon: "../images/misc/nuppin.png",
};

const seo = domain === ROUTES.PARCEIRO ? seo_parceiro : seo_nuppin;

document.title = seo.title;
document.querySelector('meta[name="description"]').setAttribute("content", seo.metaDescription);
document.querySelector('link[rel="icon"]').setAttribute("href", seo.favicon);

render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
