import React from "react";
import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";

import routes from "./routes";

const App = ({url}) => {
	let context = {};
	let store = createStore(reducers);

	return (
		<Provider store={store}>
			<StaticRouter location={url} context={context}>
				{ renderRoutes(routes) }
			</StaticRouter>
		</Provider>
	);
};

export default App;
