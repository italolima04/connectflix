import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";
import Error404 from "./pages/Error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cadastro/video" component={NewVideo} />
        <Route path="/cadastro/categoria" component={NewCategory} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
