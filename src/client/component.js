import React from "react";
import styles from "./styles.scss";
import img from "./logo.png";
import Svg from "./svg.svg";

const Component = () => (
	<div>
		<h2 className={styles.component}>from component</h2>
		<img src={img} />
		<Svg />
	</div>
);

export default Component;
