import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";

const assetsFile = path.resolve("build", "manifest.json");

const renderApp = (req, res) => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const manifest = require(assetsFile);

	const html = renderToString(
		<Template
			title='title'
			assets={manifest}
		/>
	);

	res.send("<!DOCTYPE html>"+html);
};

export const renderDevPage = (req, res) => {
	renderApp(req.url, res);
};
