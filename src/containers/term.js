import React, { useEffect, useState } from "react";
import { Term } from "../components";
import axios from "../utils/axios";

export function TermContainer() {
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("https://api.nuppin.com/v4/legal/user_agreement")
      .then((res) => setData(res.data))
      .catch((e) => {});
  }, []);

  return (
    <Term>
      <Term.Card>
        <Term.Title>Termos de uso</Term.Title>
        <Term.Text>{data?.content}</Term.Text>
      </Term.Card>
    </Term>
  );
}
