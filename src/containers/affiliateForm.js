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
      .post(INDICATION, { user_id: user.user_id, reference: company.reference })
      .then((res) => {
        if (res.status === 200) {
          if (typeof rerender === "function") {
            rerender();
            setcompany({ ...company, reference: "" });
          }
        } else {
          alert("Email já indicado ou usuário já cadastrado!");
        }
        setProcessing(false);
      })
      .catch((error) => {
        setError(error.message);
        setProcessing(false);
      });
  };

  return (
    <Form>
      <Form.Title>Indicar Parceiro</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}

      <Form.Base onSubmit={handleEmail} method="POST">
        <Form.Input
          type="email"
          placeholder="indicado@email.com"
          value={company.reference}
          onChange={({ target }) => setcompany({ ...company, reference: target.value })}
        />
        <Form.Submit disabled={isInvalid || processing} type="submit">
          {processing ? "Processando..." : "INDICAR"}
        </Form.Submit>
      </Form.Base>

      <Form.TextSmall>
        Após a indicação, o responsavel pelo email terá até 48hrs para efetuar o pagamento para contar como uma
        indicação sua{" "}
      </Form.TextSmall>
    </Form>
  );
}
