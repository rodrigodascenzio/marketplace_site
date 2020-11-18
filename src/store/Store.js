import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { SWRConfig } from "swr";
import { seo } from "../helpers/seo";
import { Loading } from "../components";

const initialState = {
  domain: null,
  user: null,
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;
    seo(domain);
    const user = JSON.parse(localStorage.getItem(`nuppin::user`));
    if (user) {
      axios.defaults.headers.Authorization = `Bearer ${user.refresh_token}`;
    }

    setState({ ...state, user, domain });
    setLoading(false);
  }, []);

  function setLocalStorage(user) {
    localStorage.setItem(`nuppin::user`, JSON.stringify({ ...user }));
    axios.defaults.headers.Authorization = `Bearer ${user.refresh_token}`;
    setState({ ...state, user });
  }

  function removeLocalStorage(key = `nuppin::user`) {
    localStorage.removeItem(key);
    axios.defaults.headers.Authorization = null;
    setState({ ...state, user: null });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SWRConfig value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}>
      <Context.Provider value={{ state, setState, setLocalStorage, removeLocalStorage }}>{children}</Context.Provider>
    </SWRConfig>
  );
};

export default Store;
