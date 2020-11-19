import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Indication, Loading, Balance } from "../components";
import { AffiliateFormContainer } from "./affiliateForm";
import { NotFound } from "../components";
import { USER_TRANSACTION, CASHOUT } from "../constants/apiRoutes";
import useSWR, { mutate } from "swr";
import { Context } from "../store/Store";
import { mMoney } from "../utils/masks";
import axios from "../utils/axios";

export function BalanceContainer() {
  const { state } = useContext(Context);
  const { user } = state;
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const { data } = useSWR(`${USER_TRANSACTION}/${user.user_id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleCashOut() {
    setProcessing(true);
    axios
      .post(CASHOUT, { user_id: user.user_id })
      .then((res) => {
        mutate(`${USER_TRANSACTION}/${user.user_id}`);
        setProcessing(false);
      })
      .catch((error) => {
        setError(error.message);
        setProcessing(false);
      });
  }

  if (!data) return <Loading />;

  if (!data.transaction.length) {
    return (
      <Indication>
        <Indication.Card style={{ display: "flex", justifyContent: "center" }}>
          <NotFound>
            <NotFound.Card>
              <NotFound.Img src={require("../images/misc/error.svg")} />
              <NotFound.Text style={{ color: "#222", fontSize: "14px" }}>Sem histórico de transações...</NotFound.Text>
            </NotFound.Card>
          </NotFound>
        </Indication.Card>
      </Indication>
    );
  }

  function returnStatus(status) {
    switch (status) {
      case "pending":
        return <Indication.Text>Analisando</Indication.Text>;
      case "concluded":
        return <Indication.Text>Concluido</Indication.Text>;
    }
  }

  return (
    <Indication>
      <Indication.Card>
        <Balance>
          <Balance.Title>Saldo</Balance.Title>
          {error && <Balance.Error>{error}</Balance.Error>}

          <Balance.Text>{mMoney(data.balance.amount)}</Balance.Text>
          <Balance.Submit disabled={processing || parseInt(data.balance.amount) < 2} onClick={handleCashOut}>
            {processing ? "Processando..." : "SACAR"}
          </Balance.Submit>

          <Balance.TextSmall>
            Após efetuar o saque, leva de 5 a 10 dias para verificar e transferir para sua conta. O minimo para saque é
            de R$50,00. Cada saque possui uma taxa de R$5,00.
          </Balance.TextSmall>
        </Balance>

        <Indication.ContentBlock>
          <Indication.Title>Transações</Indication.Title>
          <Indication.Group>
            {data.transaction.map((item) => (
              <Indication.Item>
                <Indication.InnerItem style={{ minWidth: "20%" }}>
                  <Indication.SubText>Valor</Indication.SubText>
                  <Indication.Text>{mMoney(item.amount)}</Indication.Text>
                </Indication.InnerItem>
                <Indication.InnerItem style={{ flexGrow: "1" }}>
                  <Indication.SubText>Descrição</Indication.SubText>
                  <Indication.Text>{item.description}</Indication.Text>
                </Indication.InnerItem>
                <Indication.InnerItem style={{ minWidth: "20%" }}>
                  <Indication.SubText>Status</Indication.SubText>
                  {returnStatus(item.status)}
                </Indication.InnerItem>
                <Indication.InnerItem>
                  <Indication.SubText>Data</Indication.SubText>
                  <Indication.Text>{item.created_date}</Indication.Text>
                </Indication.InnerItem>
              </Indication.Item>
            ))}
          </Indication.Group>
        </Indication.ContentBlock>
      </Indication.Card>
    </Indication>
  );
}
