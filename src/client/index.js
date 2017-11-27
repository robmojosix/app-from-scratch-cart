import React from "react";
import ReactDOM from "react-dom";

import Component from "./component";

import breakpoints from "./utils/breakpoints";
import logger from "./utils";

logger({ label: "componet", message: "Shared utils spilt and working!"});

ReactDOM.render(
	<div>
		<Component />
		{`I can pass scss values to the page: ${breakpoints.mobile}`}
	</div>,
	document.getElementById("App")
);
