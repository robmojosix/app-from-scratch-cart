import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import { CartItem } from "../";

import Cart from "./index";

describe("Cart", () => {
	let wrapper;
	const increaseQuantity = () => {};
	const decreaseQuantity = () => {};
	const total = 47;
	const products = [
		{
			id: 1,
			title: "product a",
			price: 23,
			quantity: 1
		},
		{
			id: 2,
			title: "product b",
			price: 12,
			quantity: 2
		}
	];

	beforeEach(() => {
		wrapper = shallow(<Cart
			products={products}
			increaseQuantity={increaseQuantity}
			decreaseQuantity={decreaseQuantity}
			total={total}
		/>);
	});

	it("renders the correct number of products", () => {
		expect(wrapper.find(CartItem).length).to.equal(products.length);
	});

	it("renders the correct total", () => {
		expect(wrapper.find("h1").text()).to.equal(`$${total}`);
	});
});
