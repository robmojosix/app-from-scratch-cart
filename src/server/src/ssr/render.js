import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import App from "../../../client/universal";
import staticRenderRoute from "./staticRenderRoute";

const assetsFile = path.resolve("build", "manifest.json");

const renderTemplateHtml = (url) => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const manifest = require(assetsFile);
	const route = staticRenderRoute(url);

	return renderToString(
		<Template
			title='title'
			route={route}
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
	res.send("<!DOCTYPE html>"+renderTemplateHtml(req.url));
};

// static prerender
export const renderTemplateStatic = () => {
	return renderAppHtml();
};
