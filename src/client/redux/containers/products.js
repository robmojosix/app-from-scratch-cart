import { connect } from "react-redux";
import * as actions from "../actions";
import { Products } from "../../components";

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(actions.addToCart(id));
		}
	};
};

const container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);

export default container;
