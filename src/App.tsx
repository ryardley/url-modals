import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import loadable from "@loadable/component";
import { StoreProvider } from "./store";
const routes = [
  {
    path: "/jobs",
    Component: loadable(() => import("./pages/Jobs"))
  },
  {
    path: "/",
    exact: true,
    Component: loadable(() => import("./pages/Home"))
  },
  {
    path: "/profile",
    Component: loadable(() => import("./pages/Profile"))
  }
];

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          {routes.map(({ path, exact, Component }) => (
            <Route exact={exact} key={path} path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
