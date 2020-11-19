import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  Home,
  NotFound,
  MainHome,
  MainAffiliate,
  Term,
  ConfirmCode,
  SignIn,
  Register,
  Dashboard,
  Balance,
  Affiliate,
  Profile,
  Denied,
} from "./pages";
import * as ROUTES from "./constants/routes";
import { ProtectedRoute, IsUserRedirect } from "./helpers/routes";
import { Context } from "./store/Store";

export function App() {
  const { state } = useContext(Context);
  const { domain, user } = state;

  if (domain === ROUTES.PARCEIRO) {
    return (
      <Router>
        <Switch>
          <ProtectedRoute exact user={true} path={ROUTES.HOME}>
            <Home />
          </ProtectedRoute>
          <ProtectedRoute exact user={true} path={ROUTES.TERM}>
            <Term />
          </ProtectedRoute>

          <ProtectedRoute user={true} path={ROUTES.HOME}>
            <NotFound />
          </ProtectedRoute>
        </Switch>
      </Router>
    );
  } else if (domain === ROUTES.NUPPIN) {
    return (
      <Router>
        <Switch>
          <ProtectedRoute exact user={true} path={ROUTES.HOME}>
            <MainHome />
          </ProtectedRoute>
          <ProtectedRoute exact user={true} path={ROUTES.TERM}>
            <Term />
          </ProtectedRoute>

          <ProtectedRoute user={true} path={ROUTES.HOME}>
            <NotFound />
          </ProtectedRoute>
        </Switch>
      </Router>
    );
  } else if (domain === ROUTES.AFFILIATE) {
    if (user && !user.is_affiliate && document.location.pathname != ROUTES.PROFILE) {
      return (
        <Router>
          <ProtectedRoute user={true} path={ROUTES.HOME}>
            <Denied />
          </ProtectedRoute>
        </Router>
      );
    }

    return (
      <Router>
        <Switch>
          <IsUserRedirect exact user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>

          <ProtectedRoute exact user={true} path={ROUTES.EMAIL}>
            <SignIn />
          </ProtectedRoute>

          <ProtectedRoute exact user={true} path={ROUTES.SMS}>
            <SignIn />
          </ProtectedRoute>

          <ProtectedRoute exact user={true} path={ROUTES.CONFIRM_CODE}>
            <ConfirmCode />
          </ProtectedRoute>

          <IsUserRedirect exact user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.REGISTER}>
            <Register />
          </IsUserRedirect>

          <IsUserRedirect exact user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.HOME}>
            <MainAffiliate />
          </IsUserRedirect>

          <ProtectedRoute exact user={user} path={ROUTES.DASHBOARD}>
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute exact user={user} path={ROUTES.AFFILIATES_STORE}>
            <Affiliate />
          </ProtectedRoute>

          <ProtectedRoute exact user={user} path={ROUTES.BALANCE}>
            <Balance />
          </ProtectedRoute>

          <ProtectedRoute exact user={user} path={ROUTES.PROFILE}>
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute exact user={true} path={ROUTES.TERM}>
            <Term />
          </ProtectedRoute>

          <ProtectedRoute user={true} path={ROUTES.HOME}>
            <NotFound />
          </ProtectedRoute>
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <ProtectedRoute user={true} path={ROUTES.HOME}>
          <NotFound />
        </ProtectedRoute>
      </Router>
    );
  }
}
