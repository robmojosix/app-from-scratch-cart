import React from "react";
import img from "../logo.png";
import Svg from "../svg.svg";
import styles from "../styles.scss";

const Component = () => (
	<div>
		<h2 className={styles.component}>from component</h2>
		<img src={img} />
		<Svg />
	</div>
);

export default Component;
