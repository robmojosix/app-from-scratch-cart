import * as actionTypes from "../actions/types";

const initialState = [];

const productExistInCart = (state, id) => {
	if(state.length <= 0) { return false; }
	return state.filter((item) => item.id === id).length > 0;
};

const reducer = (state=initialState, action) => {
	switch(action.type) {
	case actionTypes.ADD_TO_CART:
		if (productExistInCart(state, action.productId)) {
			return state.map((item) => {
				if (item.id === action.productId) {
					return { ...item, quantity: item.quantity += 1 };
				} else {
					return { ...item };
				}
			});
		} else {
			return [...state,
				{
					id: action.productId,
					quantity: 1
				}
			];
		}
	case actionTypes.INCREASE_QUANTITY:
		return state.map((item) => {
			if (item.id === action.productId) {
				return { ...item, quantity: item.quantity += 1 };
			} else {
				return { ...item };
			}
		});
	case actionTypes.DECREASE_QUANTITY:
		return state.map((item) => {
			if (item.id === action.productId) {
				return { ...item, quantity: item.quantity -= 1 };
			} else {
				return { ...item };
			}
		}).filter((item) => {
			return item.quantity > 0;
		});
	default:
		return state;
	}
};

export default reducer;
