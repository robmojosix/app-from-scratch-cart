import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { expect } from "chai";
import sandbox from "../../../../utilities/tests/sandbox";

import { products } from "../../../../utilities/tests/fixtures";

import * as actionTypes from "./types";
import * as actions from "./";

let productId = 12345;
let mockStore;
let cartProducts;
let store;

describe("actions", () => {
	beforeEach(() => {
		mockStore = configureMockStore([thunk]);

		cartProducts = [
			{ id: 1, quantity: 1},
			{ id: 2, quantity: 2},
		];

		store = mockStore({
			products: products,
			cart: {
				products: cartProducts,
				total: 0
			}
		});
	});

	describe("decreaseQuantityHandler", () => {
		it("returns the correct actions", () => {
			const expectedActions = [
				{
					type: actionTypes.DECREASE_QUANTITY,
					productId: productId
				},
				{
					type: actionTypes.CALCULATE_TOTAL,
					productDirectory: products,
					cartProducts
				}
			];

			store.dispatch(actions.decreaseQuantityHandler(productId));
			expect(store.getActions()).to.deep.equal(expectedActions);
		});

		it("dispatches the correct actions", () => {
			const state = {
				products: [],
				cart: {
					products:[],
					total: 0
				}
			};
			const dispatch = sandbox.spy();
			const getState = sandbox.stub().returns(state);

			const decreaseQuantityAction = {
				type: actionTypes.DECREASE_QUANTITY,
				productId
			};
			const calculateTotalAction = {
				type: actionTypes.CALCULATE_TOTAL,
				productDirectory: state.products,
				cartProducts: state.cart.products
			};

			actions.decreaseQuantityHandler(productId)(dispatch, getState);
			expect(dispatch).inOrder.calledWith(decreaseQuantityAction)
				.subsequently.calledWith(calculateTotalAction);

			expect(getState).calledOnce;
		});
	});

	describe("increaseQuantityHandler", () => {
		it("returns the correct actions", () => {
			const expectedActions = [
				{
					type: actionTypes.INCREASE_QUANTITY,
					productId: productId
				},
				{
					type: actionTypes.CALCULATE_TOTAL,
					productDirectory: products,
					cartProducts
				}
			];

			store.dispatch(actions.increaseQuantityHandler(productId));
			expect(store.getActions()).to.deep.equal(expectedActions);
		});

		it("dispatches the correct actions", () => {
			const state = {
				products: [],
				cart: {
					products:[],
					total: 0
				}
			};
			const dispatch = sandbox.spy();
			const getState = sandbox.stub().returns(state);

			const increaseQuantityAction = {
				type: actionTypes.INCREASE_QUANTITY,
				productId
			};
			const calculateTotalAction = {
				type: actionTypes.CALCULATE_TOTAL,
				productDirectory: state.products,
				cartProducts: state.cart.products
			};

			actions.increaseQuantityHandler(productId)(dispatch, getState);
			expect(dispatch).inOrder.calledWith(increaseQuantityAction)
				.subsequently.calledWith(calculateTotalAction);

			expect(getState).calledOnce;
		});
	});

	describe("increaseQuantity", () => {
		it("returns the correct action", () => {
			const expectedAction = {
				type: actionTypes.INCREASE_QUANTITY,
				productId: productId
			};
			expect(actions.increaseQuantity(productId)).to.deep.equal(expectedAction);
		});
	});

	describe("decreaseQuantity", () => {
		it("returns the correct action", () => {
			const expectedAction = {
				type: actionTypes.DECREASE_QUANTITY,
				productId: productId
			};
			expect(actions.decreaseQuantity(productId)).to.deep.equal(expectedAction);
		});
	});

	// describe("productsReceived", () => {
	//   it("returns the correct action", () => {
	//     const expectedAction = {
	//       type: actionTypes.PRODUCTS_RECEIVED,
	//       products
	//     }
	//     expect(actions.productsReceived()).to.deep.equal(expectedAction);
	//   });
	// });

	describe("calculateTotal", () => {
		it("returns the correct action", () => {
			const expectedAction = {
				type: actionTypes.CALCULATE_TOTAL,
				productDirectory: products,
				cartProducts
			};
			expect(actions.calculateTotal(products, cartProducts)).to.deep.equal(expectedAction);
		});
	});

	describe("addToCartHandler", () => {
		it("returns the correct action", () => {
			const expectedActions = [
				{
					type: actionTypes.ADD_TO_CART,
					productId: productId
				},
				{
					type: actionTypes.CALCULATE_TOTAL,
					productDirectory: products,
					cartProducts
				}
			];

			store.dispatch(actions.addToCartHandler(productId));
			expect(store.getActions()).to.deep.equal(expectedActions);
		});

		it("dispatches the correct actions", () => {
			const state = {
				products: [],
				cart: {
					products:[],
					total: 0
				}
			};
			const dispatch = sandbox.spy();
			const getState = sandbox.stub().returns(state);

			const addToCartAction = {
				type: actionTypes.ADD_TO_CART,
				productId
			};
			const calculateTotalAction = {
				type: actionTypes.CALCULATE_TOTAL,
				productDirectory: state.products,
				cartProducts: state.cart.products
			};

			actions.addToCartHandler(productId)(dispatch, getState);
			expect(dispatch).inOrder.calledWith(addToCartAction)
				.subsequently.calledWith(calculateTotalAction);

			expect(getState).calledOnce;
		});
	});

	describe("addToCart", () => {
		it("returns the correct action", () => {
			const expectedAction = {
				type: actionTypes.ADD_TO_CART,
				productId: productId
			};
			expect(actions.addToCart(productId)).to.deep.equal(expectedAction);
		});
	});

});
