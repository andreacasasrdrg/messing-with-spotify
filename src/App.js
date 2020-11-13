import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Layout, LayoutPublic } from "./components/Layout/Layout";
import Dashboard from "./views/Dashboard/Dashboard";
import Landing from "./views/Landing/Landing";

// styles
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = createBrowserHistory();

  const RouteWrapper = ({
    component: Component,
    layout: Layout,
    access,
    ...rest
  }) => {
    switch (access) {
      case "public":
        return (
          <Route {...rest} render={(props) =>
            <Layout {...props}>
              <Component {...props} />
            </Layout>
          } />
        );
      case "private":
        return (
          <Route {...rest} render={(props) =>
            <Layout {...props}>
              <Component {...props} />
            </Layout>
          } component={Component} />
        );
      default:
    }
  }

  if (isLoading) {
    console.log("is loading")
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <Switch>
            <RouteWrapper path="/" exact component={Landing} access={"public"} layout={LayoutPublic} />
            <RouteWrapper path="/dashboard" exact component={Dashboard} access={"private"} layout={Layout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;