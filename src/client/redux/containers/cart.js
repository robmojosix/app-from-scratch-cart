import { connect } from "react-redux";
import * as actions from "../actions";
import { Cart } from "../../components";
import { lookUpProductById } from "../reducers";

const mapProductsAndQuanitity = (state) => (
	state.cart.map((item) => {
		return {
			...lookUpProductById(state, item.id),
			quantity: item.quantity
		};
	})
);

const mapStateToProps = (state) => {
	return {
		products: mapProductsAndQuanitity(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increaseQuantity: (id) => {
			dispatch(actions.increaseQuantity(id));
		},
		decreaseQuantity: (id) => {
			dispatch(actions.decreaseQuantity(id));
		}
	};
};

const container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);

export default container;
