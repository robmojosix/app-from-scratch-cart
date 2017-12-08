import * as actionTypes from "../actions/types";

const initialState = { total: 0 };

const counter = (state=initialState, action) => {
	switch(action.type) {
	case actionTypes.PLUS:
		return Object.assign({}, state,
			{
				total: action.counter
			}
		);
	case actionTypes.MINUS:
		return Object.assign({}, state,
			{
				total: action.counter
			}
		);
	default:
		return state;
	}
};

export default counter;
