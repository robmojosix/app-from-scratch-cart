import React from "react";
import { renderRoutes } from "react-router-config";

const Component = (props) => (
	<div>
		{"Root Level"}
		{renderRoutes(props.route.routes)}
	</div>
);

export default Component;
