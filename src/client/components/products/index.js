import React from "react";
import { func, array } from "prop-types";
import { Product } from "../";

const displayName = "Products";

const defaultProps = {
	addToCart: null,
	products: []
};

const propTypes = {
	addToCart: func.isRequired,
	products: array.isRequired
};

const component = ({ addToCart, products }) => (
	<div>
		<h1>{"Products"}</h1>
		{
			products.map((product) => {
				const { title, price, id } = product;
				return (
					<Product
						key={id}
						title={title}
						price={price}
						onClick={ () => addToCart(id) }
					/>
				);
			})
		}
	</div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
