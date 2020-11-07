import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, NotFound, MainHome, Term } from "./pages";
import * as ROUTES from "./constants/routes";
import { ProtectedRoute } from "./helpers/routes";

const domain = document.location.host.split(".")[0] ? document.location.host.split(".")[0] : document.location.host;

export function App() {
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
