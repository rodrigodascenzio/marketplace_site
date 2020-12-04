import * as ROUTES from "../constants/routes";

export function seo(type) {
  const seo_parceiro = {
    title: "Nuppin • Sejá um parceiro",
    metaDescription: " Plataforma Nuppin Empresas",
    favicon: require("../images/misc/company_nuppin.png"),
  };
  const seo_nuppin = {
    title: "Nuppin",
    metaDescription: "Produto, Alimentos e Serviços de Beleza",
    favicon: require("../images/misc/nuppin.png"),
  };

  const seo_affiliate = {
    title: "Nuppin • Vendas",
    metaDescription: "Área de vendas para membros de equipe do Nuppin",
    favicon: require("../images/misc/nuppin.png"),
  };

  let data = {};

  switch (type) {
    case ROUTES.PARCEIRO:
      data = seo_parceiro;
      break;
    case ROUTES.NUPPIN:
      data = seo_nuppin;
      break;
    case ROUTES.VENDAS:
      data = seo_affiliate;
      break;
  }

  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute("content", data.metaDescription);
  document.querySelector('link[rel="icon"]').setAttribute("href", data.favicon);
}
