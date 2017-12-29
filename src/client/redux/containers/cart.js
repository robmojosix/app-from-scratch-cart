import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Cart } from "../../components";
import { lookUpProductById } from "../utils";

const mapProductsAndQuantity = (state) => (
	state.cart.products.map((item) => {
		return {
			...lookUpProductById(state.products, item.id),
			quantity: item.quantity
		};
	})
);

export const mapStateToProps = (state) => {
	return {
		products: mapProductsAndQuantity(state),
		total: state.cart.total
	};
};

export const mapDispatchToProps = (dispatch) =>
	bindActionCreators({
		increaseQuantity: actions.increaseQuantityHandler,
		decreaseQuantity: actions.decreaseQuantityHandler
	}, dispatch);

const container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);

export default container;
