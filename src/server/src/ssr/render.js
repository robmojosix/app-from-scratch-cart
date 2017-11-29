import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";
import App from "../../../client/universal";

const assetsFile = path.resolve("build", "manifest.json");

const renderTemplateHtml = () => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const manifest = require(assetsFile);

	return renderToString(
		<Template
			title='title'
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
	res.send("<!DOCTYPE html>"+renderTemplateHtml());
};

// static prerender
export const renderTemplateStatic = () => {
	return renderAppHtml();
};
