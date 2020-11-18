import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Indication, Loading } from "../components";
import { AffiliateFormContainer } from "./affiliateForm";
import { NotFound } from "../components";
import { USER_INDICATION } from "../constants/apiRoutes";
import useSWR, { mutate } from "swr";
import { Context } from "../store/Store";

export function IndicationContainer() {
  const { state } = useContext(Context);
  const { user } = state;

  const { data } = useSWR(`${USER_INDICATION}/${user.user_id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <Loading />;

  if (!data.length) {
    return (
      <Indication>
        <Indication.Card>
          <AffiliateFormContainer
            rerender={() => {
              mutate(`${USER_INDICATION}/${user.user_id}`);
            }}
          />
          <Indication.ContentBlock>
            <Indication.Title>Indicados</Indication.Title>
            <Indication.Group>
              <NotFound>
                <NotFound.Card>
                  <NotFound.Img src={require("../images/misc/error.svg")} />
                  <NotFound.Text style={{ color: "#222", fontSize: "14px" }}>Sem indicações pendentes...</NotFound.Text>
                </NotFound.Card>
              </NotFound>
            </Indication.Group>
          </Indication.ContentBlock>
        </Indication.Card>
      </Indication>
    );
  }

  return (
    <Indication>
      <Indication.Card>
        <AffiliateFormContainer
          rerender={() => {
            mutate(`${USER_INDICATION}/${user.user_id}`);
          }}
        />
        <Indication.ContentBlock>
          <Indication.Title>Indicados</Indication.Title>
          <Indication.Group>
            {data.map((item) => (
              <Indication.Item>
                <Indication.InnerItem style={{ flexGrow: "1" }}>
                  <Indication.SubText>Email</Indication.SubText>
                  <Indication.Text>{item.reference}</Indication.Text>
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
