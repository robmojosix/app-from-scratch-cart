import React from "react";
import Component from "../../../client/routes/component";
import Page1 from "../../../client/routes/page1";
import Page2 from "../../../client/routes/page2";

const routeLookUp = {
	"/": Component,
	"/page1": Page1,
	"/page2": Page2
};

const notFound = () => (
	<div>404 not found</div>
);

const staticRenderRoute = (url) => {
	const Route = routeLookUp[url] ? routeLookUp[url] : notFound;
	return (
		<Route />
	);
};


export default staticRenderRoute;
