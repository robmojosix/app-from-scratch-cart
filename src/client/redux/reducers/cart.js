import * as actionTypes from "../actions/types";
import { lookUpProductById } from "./";

const initialState = {
	products: [],
	total: 0
};

const calculateTotal = (productDirectory, cartProducts) => {
	return cartProducts.reduce((total, product) => (
		Math.round(
			(total
			+ (lookUpProductById(productDirectory, product.id).price
			* product.quantity))
			* 100
		) / 100
	), 0);
};

const productExistInCart = (state, id) => {
	if(state.products.length <= 0) { return false; }
	return state.products.filter((item) => item.id === id).length > 0;
};

const reducer = (state=initialState, action) => {
	switch(action.type) {
	case actionTypes.ADD_TO_CART:
		if (productExistInCart(state, action.productId)) {
			return {
				...state,
				products: state.products.map((item) => {
					if (item.id === action.productId) {
						return { ...item, quantity: item.quantity += 1 };
					} else {
						return { ...item };
					}
				})
			};
		} else {
			return {
				...state,
				products: [
					...state.products,
					{
						id: action.productId,
						quantity: 1
					}
				]
			};
		}
	case actionTypes.INCREASE_QUANTITY:
		return {
			...state,
			products: state.products.map((item) => {
				if (item.id === action.productId) {
					return { ...item, quantity: item.quantity += 1 };
				} else {
					return { ...item };
				}
			})
		};
	case actionTypes.DECREASE_QUANTITY:
		return {
			...state,
			products: state.products.map((item) => {
				if (item.id === action.productId) {
					return { ...item, quantity: item.quantity -= 1 };
				} else {
					return { ...item };
				}
			}).filter((item) => {
				return item.quantity > 0;
			})
		};
	case actionTypes.CALCULATE_TOTAL:
		return {
			...state,
			total: calculateTotal(
				action.productDirectory,
				action.cartProducts
			)
		};
	default:
		return state;
	}
};

export default reducer;
