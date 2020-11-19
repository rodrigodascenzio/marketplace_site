import React from "react";
import { Jumbotron } from "../components";
import * as ROUTES from "../constants/routes";

export function JumbotronContainer({ jumbo }) {
  return (
    <>
      {jumbo.map((c) => (
        <Jumbotron.Container background={c.background}>
          {c.data.map((item) => (
            <Jumbotron
              key={item.id}
              direction={item.direction}
              style={item.id === 99 ? { minHeight: "auto", borderBottom: "8px solid #9162e4" } : {}}
            >
              <Jumbotron.Pane style={{ padding: item.direction === "row-reverse" ? "0 0 0 5%" : "0 50px" }}>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                {item.id === 99 && <Jumbotron.Button href={ROUTES.AFILIADO_SITE}>Fazer Parte</Jumbotron.Button>}
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          ))}
        </Jumbotron.Container>
      ))}
    </>
  );
}
