import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Affiliate, Loading, NotFound } from "../components";
import { AFFILIATE } from "../constants/apiRoutes";
import * as ROUTES from "../constants/routes";
import useSWR from "swr";
import { Context } from "../store/Store";
import { mMoney } from "../utils/masks";

export function AffiliateContainer() {
  const history = useHistory();
  const { state } = useContext(Context);
  const { user } = state;

  const { data } = useSWR(`${AFFILIATE}/${user.id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <Loading />;

  function handleClickItem(itemId) {
    // history.push(ROUTES.ORDER_DETAIL, { id: itemId });
  }

  console.log(data);

  function returnStatus(status) {
    switch (status) {
      case "canceled":
        return <Affiliate.Text>Não foi pago</Affiliate.Text>;
      case "paid":
      case "concluded":
        return <Affiliate.Text>Pago</Affiliate.Text>;
      default:
        return <Affiliate.Text>Aguardando pagamento</Affiliate.Text>;
    }
  }

  if (!data.length) {
    return (
      <Affiliate>
        <Affiliate.Card>
          <NotFound>
            <NotFound.Card>
              <NotFound.Img src={require("../images/misc/error.svg")} />
              <NotFound.Text style={{ color: "#222", fontSize: "14px" }}>
                Nenhum indicado foi concluido com sucesso ainda
              </NotFound.Text>
            </NotFound.Card>
          </NotFound>
        </Affiliate.Card>
      </Affiliate>
    );
  }

  return (
    <Affiliate>
      <Affiliate.Card>
        <Affiliate.Title>Indicados ativos</Affiliate.Title>
        <Affiliate.Group>
          {data.map((item) => (
            <Affiliate.Item onClick={(e) => handleClickItem(item.id)}>
              <Affiliate.InnerItem>
                <Affiliate.SubText>Email</Affiliate.SubText>
                <Affiliate.Text>{item.reference}</Affiliate.Text>
              </Affiliate.InnerItem>
              <Affiliate.InnerItem style={{ margin: "0 10px", flexGrow: "1" }}>
                <Affiliate.SubText>Status</Affiliate.SubText>
                {returnStatus(item.status)}
              </Affiliate.InnerItem>
              <Affiliate.InnerItem>
                <Affiliate.SubText>Data</Affiliate.SubText>
                <Affiliate.Text>{item.created_date}</Affiliate.Text>
              </Affiliate.InnerItem>
            </Affiliate.Item>
          ))}
        </Affiliate.Group>
      </Affiliate.Card>
    </Affiliate>
  );
}
