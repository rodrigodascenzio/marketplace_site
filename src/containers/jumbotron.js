import React from "react";
import { Jumbotron } from "../components";

export function JumbotronContainer({ jumbo }) {
  return (
    <>
      {jumbo.map((c) => (
        <Jumbotron.Container background={c.background}>
          {c.data.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane style={{ padding: item.direction === "row-reverse" ? "0 0 0 5%" : "0 50px" }}>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
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
