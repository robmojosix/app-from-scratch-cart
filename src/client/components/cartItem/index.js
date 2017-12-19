import React from "react";
import { string, number, func } from "prop-types";

const displayName = "cartItem";

const defaultProps = {
	id: null,
	title: null,
	price: null,
	quantity: 1,
	increaseQuantity: null,
	decreaseQuantity: null,
};

const propTypes = {
	id: number.isRequired,
	title: string.isRequired,
	price: number.isRequired,
	quantity: number.isRequired,
	increaseQuantity: func.isRequired,
	decreaseQuantity: func.isRequired,
};

const component = ({ id, title, price, quantity, increaseQuantity, decreaseQuantity }) => (
	<div>
		<h3>{title}</h3>
		<p>{price}</p>
		<p>quantity {quantity}</p>
		<button onClick={ () => increaseQuantity(id) }>+</button>
		<button onClick={ () => decreaseQuantity(id) }>-</button>
	</div>
);

component.displayName = displayName;
component.propTypes = propTypes;
component.defaultProps = defaultProps;
export default component;
