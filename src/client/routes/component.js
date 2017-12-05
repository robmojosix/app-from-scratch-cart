import React from "react";
import img from "../logo.png";
import Svg from "../svg.svg";
import styles from "../styles.scss";
import breakpoints from "../utils/breakpoints";

const Component = () => (
	<div>
		{`I can pass scss values to the page: ${breakpoints.mobile}`}
		<h2 className={styles.component}>from component</h2>
		<img src={img} />
		<Svg />
	</div>
);

export default Component;
