import React from "react";
import { string, object } from "prop-types";
import { PROD } from "../../../../utilities";

class Template extends React.Component {
	render() {
		const { title, assets, children, rehydrateState } = this.props;
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
						{children}
					</div>
					<script dangerouslySetInnerHTML={{__html: rehydrateState}} />
					<script src={assets.vendor.js}></script>
					<script src={assets.utils.js}></script>
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
