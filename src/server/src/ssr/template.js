import React from "react";
import { string, object } from "prop-types";
import App from "../../../client/universal";
import { PROD } from "../../../../utilities";

class Template extends React.Component {
	render() {
		const { title, assets } = this.props;

		return (
			<html>
				<head>
					<meta charSet="utf-8"/>
					<title>{title}</title>
					<If condition={ PROD }>
						<link rel="stylesheet" type="text/css" href={assets.main.css} />
					</If>
				</head>
				<body>
					<h1>Server render</h1>
					<div id="App">
						<App />
					</div>
					<script src={assets.main.js}></script>
				</body>
			</html>
		);
	}
}

Template.propTypes = {
	title: string.isRequired,
	assets: object.isRequired,
};

export default Template;
