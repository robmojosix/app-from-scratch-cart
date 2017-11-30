import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import Component from "./routes/component";
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";

import breakpoints from "./utils/breakpoints";
import logger from "./utils";

logger({ label: "componet", message: "Shared utils spilt and working!"});

ReactDOM.render(
	<Router>
		<div>
			{`I can pass scss values to the page: ${breakpoints.mobile}`}
			<Route exact path="/" component={Component}/>
			<Route exact path="/page1" component={Page1}/>
			<Route exact path="/page2" component={Page2}/>
		</div>
	</Router>,
	document.getElementById("App")
);
