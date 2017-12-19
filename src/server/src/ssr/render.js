import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import { productsReceived } from "../../../client/redux/actions";

import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";
import routes from "../../../client/routes";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../../../client/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const assetsFile = path.resolve("build", "manifest.json");

const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(thunk)) // add middlewares to this guy
);

const staticRouter = (url, routes, store) => {
	store.dispatch(productsReceived());
	let context = {};
	return (
		<Provider store={store}>
			<StaticRouter location={url} context={context}>
				{ renderRoutes(routes) }
			</StaticRouter>
		</Provider>
	);
};

const renderTemplateHtml = (req) => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const manifest = require(assetsFile);

	const Content = staticRouter(req.url, routes, store);
	const state = store.getState();

	const rehydrateState = `window.__INITIAL_STATE__ =${JSON.stringify(state)}`;

	return renderToString(
		<Template title='title' assets={manifest} rehydrateState={rehydrateState} >
			{Content}
		</Template>
	);
};

const renderAppHtml = (url) => {
	return renderToString(
		staticRouter(url, routes, store)
	);
};

// on server request
export const renderTemplate = (req, res) => {
	res.send("<!DOCTYPE html>"+renderTemplateHtml(req));
};

// static prerender
export const renderTemplateStatic = (url) => {
	return renderAppHtml(url);
};
