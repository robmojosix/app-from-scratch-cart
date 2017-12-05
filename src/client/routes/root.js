import React from "react";
import { renderRoutes } from "react-router-config";

import img from "../logo.png";
import Svg from "../svg.svg";
import styles from "../styles.scss";
import breakpoints from "../utils/breakpoints";

const Component = (props) => (
	<div>
		{`I can pass scss values to the page: ${breakpoints.mobile}`}
		<h2 className={styles.component}>Heading</h2>
		<img className={styles.img} src={img} />
		<Svg className={styles.svg} />
		{renderRoutes(props.route.routes)}
	</div>
);

export default Component;
