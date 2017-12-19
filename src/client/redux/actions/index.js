import * as actionTypes from "./types";

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

const products = [
	{
		"id" : 1,
		"title": "Travel Card Holder",
		"price" : 9.95,
	},
	{
		"id" : 2,
		"title": "Personalised cufflinks",
		"price" : 45.00,
	},
	{
		"id" : 3,
		"title": "Kids T-shirt",
		"price" : 19.95,
	}
];

export const productsReceived = () => (
	{
		type: actionTypes.PRODUCTS_RECEIVED,
		products
	}
);

export const calculateTotal = (products, cartProducts) => {
	return {
		type: actionTypes.CALCULATE_TOTAL,
		productDirectory: products,
		cartProducts
	};
};

// to be used when we introduce async call
// export const getProductData = () => (dispatch) => {
//   dispatch(productsReceived(products));
// }

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
