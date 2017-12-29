/* eslint-disable no-console */
import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";

import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";
import routes from "../../../client/routes";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../../../client/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { fetchProducts } from "../../../client/redux/actions";

const assetsFile = path.resolve("build", "manifest.json");

const createDynamicStore = (initialData) => (
	createStore(
		reducers,
		initialData,
		composeWithDevTools(applyMiddleware(thunk)) // add middlewares to this guy
	)
);

const getStore = () => {
	return fetchProducts().then((products) => {
		return createDynamicStore({ products: products });
	}).catch((error) => {
		console.log("Failed to fetch product data!", error);
	});
};

const staticRouter = (url, routes, store) => {
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
	return getStore().then((store) => {
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
	});
};

const renderAppHtml = (url) => {
	return getStore().then((store) => {
		return renderToString(
			staticRouter(url, routes, store)
		);
	});
};

// on server request
export const renderTemplate = (req, res) => {
	renderTemplateHtml(req).then((html) => {
		res.send("<!DOCTYPE html>"+html);
	});
};

// static prerender
export const renderTemplateStatic = (url) => {
	return renderAppHtml(url);
};
