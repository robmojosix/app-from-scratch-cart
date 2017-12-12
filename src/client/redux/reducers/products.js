import * as actionTypes from "../actions/types";

export const lookUpProductById = (state, id) => (
	state.products.filter((product) => product.id === id)[0]
);

const reducer = (state=[], action) => {
	switch(action.type) {
	case actionTypes.PRODUCTS_RECEIVED:
		return action.products;
	default:
		return state;
	}
};

export default reducer;
