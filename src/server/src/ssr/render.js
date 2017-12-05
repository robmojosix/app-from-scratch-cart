import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import App from "../../../client/universal";

import StaticRouter from "react-router-dom/StaticRouter";
import { renderRoutes } from "react-router-config";
import routes from "../../../client/routes";

const assetsFile = path.resolve("build", "manifest.json");

const staticRouter = (req, routes) => {
	let context = {};
	return (
		<StaticRouter location={req.url} context={context}>
			{ renderRoutes(routes) }
		</StaticRouter>
	);
};

const renderTemplateHtml = (req) => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const manifest = require(assetsFile);

	return renderToString(
		<Template
			title='title'
			route={staticRouter(req, routes)}
			assets={manifest}
		/>
	);
};

const renderAppHtml = () => {
	return renderToString(
		<App />
	);
};

// on server request
export const renderTemplate = (req, res) => {
	res.send("<!DOCTYPE html>"+renderTemplateHtml(req));
};

// static prerender
export const renderTemplateStatic = () => {
	return renderAppHtml();
};
