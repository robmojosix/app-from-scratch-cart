import React from "react";
import { array, func } from "prop-types";

const displayName = "Cart";

const defaultProps = {
	products: [],
	increaseQuantity: null,
	decreaseQuantity: null,
};

const propTypes = {
	products: array.isRequired,
	increaseQuantity: func.isRequired,
	decreaseQuantity: func.isRequired,
};

const component = ({ products, increaseQuantity, decreaseQuantity }) => (
	<div>
		{
			products.map((item, i) => (
				<div key={i} >
					<h3>{item.title}</h3>
					<p>{item.price}</p>
					<p>quantity {item.quantity}</p>
					<button onClick={ () => increaseQuantity(item.id) }>+</button>
					<button onClick={ () => decreaseQuantity(item.id) }>-</button>
				</div>
			))
		}
	</div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
