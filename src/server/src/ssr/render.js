import React from "react";
import { renderToString } from "react-dom/server";

const renderApp = (req, res) => {
	// dynamic require to enable hotreloading
	const Template = require("./template.js").default;
	const html = renderToString(
		<Template title='title' />
	);

	res.send("<!DOCTYPE html>"+html);
};

export const renderDevPage = (req, res) => {
	renderApp(req.url, res);
};
