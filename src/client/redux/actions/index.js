import * as actionTypes from "./types";
import fetch from "universal-fetch";

export const decreaseQuantityHandler = (id) => {
	return (dispatch, getState) => {
		dispatch(decreaseQuantity(id));

		const {products, cart} = getState();
		dispatch(calculateTotal(products, cart.products));
	};
};

export const increaseQuantityHandler = (id) => {
	return (dispatch, getState) => {
		dispatch(increaseQuantity(id));

		const {products, cart} = getState();
		dispatch(calculateTotal(products, cart.products));
	};
};


export const increaseQuantity = (id) => {
	return {
		type: actionTypes.INCREASE_QUANTITY,
		productId: id
	};
};

export const decreaseQuantity = (id) => {
	return {
		type: actionTypes.DECREASE_QUANTITY,
		productId: id
	};
};

export const calculateTotal = (products, cartProducts) => {
	return {
		type: actionTypes.CALCULATE_TOTAL,
		productDirectory: products,
		cartProducts
	};
};

export const addToCartHandler = (id) => {
	return (dispatch, getState) => {
		dispatch(addToCart(id));

		const { products, cart } = getState();
		dispatch(calculateTotal(products, cart.products));
	};
};

export const addToCart = (id) => (
	{
		type: actionTypes.ADD_TO_CART,
		productId: id
	}
);

export const fetchProducts = () => {
	return fetch("http://localhost:3001/products")
		.then((response) => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		});
};

// export const getProductData = () => (dispatch) => {
// 	dispatch(productsDataRequest());
//
// 	fetchProducts().then((products) => {
// 		dispatch(productsReceived(products));
// 	});
// };

export const productsReceived = (products) => (
	{
		type: actionTypes.PRODUCTS_RECEIVED,
		products
	}
);
