import React from "react";
import { renderToString } from "react-dom/server";

import Template from "./template.js";

const renderApp = (req, res) => {
	const html = renderToString(
		<Template title='title' />
	);

	res.send("<!DOCTYPE html>"+html);
};

export const renderDevPage = (req, res) => {
	renderApp(req.url, res);
};
