import React from "react";
import { Accordion, OptForm } from "../components";

export function FaqsContainer({ faq }) {
  return (
    <Accordion>
      <Accordion.Title>Perguntas Frequentes</Accordion.Title>
      <Accordion.Frame>
        {faq.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm.ButtonDefault>Cadastre-se</OptForm.ButtonDefault>
    </Accordion>
  );
}
