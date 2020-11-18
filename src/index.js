import React, { useContext } from "react";
import { render } from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { ThemeProvider } from "styled-components";
import * as ROUTES from "./constants/routes";
import Store from "./store/Store";

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
  primary_color: "#222",
  feature_background: "black",
  secondary_color: "#222",
  feature_background: "#000",
  faq_border: "#222",
  feature_color: "white",
  faq_item: "#303030",
  radial_background:
    "radial-gradient(circle at center left, rgb(46, 46, 46,0.97) 0%, rgb(46, 46, 46,0.97) 6%,rgb(41, 41, 41,0.97) 6%, rgb(41, 41, 41,0.97) 27%,rgb(36, 36, 36,0.97) 27%, rgb(36, 36, 36,0.97) 42%,rgb(31, 31, 31,0.97) 42%, rgb(31, 31, 31,0.97) 63%,rgb(25, 25, 25,0.97) 63%, rgb(25, 25, 25,0.97) 64%,rgb(20, 20, 20,0.97) 64%, rgb(20, 20, 20,0.97) 71%,rgb(15, 15, 15,0.97) 71%, rgb(15, 15, 15,0.97) 100%)",
};

const affiliate = {
  primary_color: "#5e35b1",
  primaryDark: "#c61c33",
  primaryLight: "#ff8c8a",
  feature_background: "#280680",
  feature_color: "#fafafa",
  faq_border: "#5e35b1",
  secondary_color: "#9162e4",
  faq_item: "#5e35b1",
  radial_background:
    "repeating-linear-gradient(67.5deg, hsla(200,0%,99%,0.05) 0px, hsla(200,0%,99%,0.05) 1px,transparent 1px, transparent 54px),repeating-linear-gradient(157.5deg, hsla(200,0%,99%,0.05) 0px, hsla(200,0%,99%,0.05) 1px,transparent 1px, transparent 54px),repeating-linear-gradient(67.5deg, hsla(200,0%,99%,0.05) 0px, hsla(200,0%,99%,0.05) 1px,transparent 1px, transparent 25px),repeating-linear-gradient(0deg, hsla(200,0%,99%,0.05) 0px, hsla(200,0%,99%,0.05) 1px,transparent 1px, transparent 25px),repeating-linear-gradient(67.5deg, hsla(200,0%,99%,0.05) 0px, hsla(200,0%,99%,0.05) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(157.5deg, hsla(200,0%,99%,0.05) 0px, hsla(200,0%,99%,0.05) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, hsl(259,49%,41%),hsl(259,49%,41%))",
};

const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;

let theme = {};

switch (domain) {
  case ROUTES.PARCEIRO:
    theme = parceiro;
    break;
  case ROUTES.NUPPIN:
    theme = nuppin;
    break;
  case ROUTES.AFFILIATE:
    theme = affiliate;
    break;
}

render(
  <React.StrictMode>
    <GlobalStyles />
    <Store>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
