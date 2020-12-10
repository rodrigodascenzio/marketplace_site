import React, { useState, useEffect, useContext } from "react";
import { Form } from "../components";
import { INDICATION } from "../constants/apiRoutes";
import axios from "../utils/axios";
import { Context } from "../store/Store";

export function AffiliateFormContainer({ rerender }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [company, setcompany] = useState({});
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const { state } = useContext(Context);
  const { user } = state;

  const isInvalid = !company.reference;

  const handleEmail = (event) => {
    event.preventDefault();
    setProcessing(true);
    axios
      .post(INDICATION, { user_id: user.id, reference: company.reference })
      .then((res) => {
        if (res.status === 200) {
          if (typeof rerender === "function") {
            rerender();
            setcompany({ ...company, reference: "" });
          }
          setError(false);
        } else {
          setError("Não foi possivel cadastrar, email já indicado ou usuário já cadastrado!");
        }
        setProcessing(false);
      })
      .catch((error) => {
        setError("Houve algum erro, tente novamente");
        setProcessing(false);
      });
  };

  return (
    <Form type={true}>
      <Form.Title style={{ textAlign: "center" }}>Cadastro</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base onSubmit={handleEmail} method="POST">
        <Form.Input
          type="email"
          placeholder="parceiro@email.com"
          value={company.reference}
          onChange={({ target }) => setcompany({ ...company, reference: target.value })}
        />
        <Form.Submit disabled={isInvalid || processing} type="submit">
          {processing ? "Processando..." : "CADASTRAR"}
        </Form.Submit>
      </Form.Base>

      <Form.TextSmall>
        Para seu cadastro ser ativado, o responsável pelo email tem até 7 dias para efetuar o cadastro e o pagamento.
      </Form.TextSmall>
    </Form>
  );
}
