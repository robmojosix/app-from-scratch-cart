import { calculateTotal, productExistInCart } from "./cart";
import { expect } from "chai";

import { products } from "../../../../utilities/tests/fixtures";

describe("calculateTotal", () => {
	it("calculates the correct total", () => {
		const cartProducts = [
			{
				id: 2,
				quantity: 2
			},
			{
				id: 1,
				quantity: 1
			},
		];
		const total = 99.95;
		expect(calculateTotal(products, cartProducts)).to.equal(total);
	});
});

describe("productExistInCart", () => {
	context("when a product exists in cart", () => {
		it("returns true", () => {
			const productId = 2;
			const state = {
				products: [{ id: productId }]
			};
			expect(productExistInCart(state, productId)).to.equal(true);
		});
	});
	context("when a product does not exist in cart", () => {
		it("returns false", () => {
			const productId = 2;
			const state = {
				products: [{ id: 1 }]
			};
			expect(productExistInCart(state, productId)).to.equal(false);
		});
	});
});
