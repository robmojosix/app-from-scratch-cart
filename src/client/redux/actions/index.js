import * as actionTypes from "./types";

let counter = 0;

export const plus = () => {
	counter++;
	return {
		type: actionTypes.PLUS,
		counter
	};
};

export const minus = () => {
	counter--;
	return {
		type: actionTypes.MINUS,
		counter
	};
};
