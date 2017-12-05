import React from "react";
import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";

import routes from "./routes";

const App = ({url}) => {
  let context = {};
  return (
    <StaticRouter location={url} context={context}>
      { renderRoutes(routes) }
    </StaticRouter>
  )
};

export default App;
