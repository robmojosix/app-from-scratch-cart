import React from "react";
import { CartItem } from "../";
import { array, func, number } from "prop-types";

const displayName = "Cart";

const defaultProps = {
	products: [],
	total: 0,
	increaseQuantity: null,
	decreaseQuantity: null,
};

const propTypes = {
	products: array.isRequired,
	total: number.isRequired,
	increaseQuantity: func.isRequired,
	decreaseQuantity: func.isRequired,
};

const component = ({ total, products, increaseQuantity, decreaseQuantity }) => (
	<div>
		{
			products.map((item, i) => (
				<CartItem
					key={i}
					id={item.id}
					title={item.title}
					price={item.price}
					quantity={item.quantity}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
				/>
			))
		}
		<h1>${total}</h1>
	</div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
