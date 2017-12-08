import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import App from "../../../client/staticTemplate";

import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";
import routes from "../../../client/routes";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../../../client/redux/reducers";

const assetsFile = path.resolve("build", "manifest.json");

const staticRouter = (req, routes) => {
	let store = createStore(reducers);
	let context = {};

	return (
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				{ renderRoutes(routes) }
			</StaticRouter>
		</Provider>
	);
};

const renderTemplateHtml = (req) => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const manifest = require(assetsFile);

	const Content = staticRouter(req, routes);

	return renderToString(
		<Template title='title' assets={manifest} >
			{Content}
		</Template>
	);
};

const renderAppHtml = (url) => {
	return renderToString(
		<App url={url}/>
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
