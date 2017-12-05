import React from "react";
import ReactDOM from "react-dom";

import logger from "./utils";

logger({ label: "componet", message: "Shared utils spilt and working!"});

import BrowserRouter from "react-router-dom/BrowserRouter";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

const App = () => (
	<BrowserRouter>
		{renderRoutes(routes)}
	</BrowserRouter>
);

ReactDOM.render(
	<App />,
	document.getElementById("App")
);
