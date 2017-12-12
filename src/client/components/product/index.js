import React from "react";
import { string, number, func } from "prop-types";
import styles from "./styles.scss";

const displayName = "Product";

const defaultProps = {
	title: "",
	price: 0
};

const propTypes = {
	onClick: func.isRequired,
	title: string.isRequired,
	price: number.isRequired
};

const component = ({ title, price, onClick }) => (
	<div className={styles.product} >
		<h1>{title}</h1>
		<h2>£{price}</h2>
		<button onClick={onClick} >{"Add to cart"}</button>
	</div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
