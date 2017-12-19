import React from "react";
import ReactDOM from "react-dom";

import logger from "./utils";

logger({ label: "componet", message: "Shared utils spilt and working!"});

import BrowserRouter from "react-router-dom/BrowserRouter";
import { renderRoutes } from "react-router-config";
import routes from "./routes";


// add redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	reducers,
	window.__INITIAL_STATE__,
	composeWithDevTools(applyMiddleware(thunk)) // add middlewares to this guy
);

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			{renderRoutes(routes)}
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(
	<App />,
	document.getElementById("App")
);
