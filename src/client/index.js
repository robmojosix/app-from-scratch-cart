import React from "react";
import ReactDOM from "react-dom";

import Component from "./component";

import breakpoints from "./utils/breakpoints";

ReactDOM.render(
	<div>
		<Component />
		{`I can pass scss values to the page: ${breakpoints.mobile}`}
	</div>,
	document.getElementById("App")
);
