import { connect } from "react-redux";
import * as actions from "../actions";
import counter from "../../routes/page1";

const mapStateToProps = (state) => {
	return {
		total: state.counter.total
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		plus: () => {
			dispatch(actions.plus());
		},
		minus: () => {
			dispatch(actions.minus());
		}
	};
};

const Counter = connect(
	mapStateToProps,
	mapDispatchToProps
)(counter);

export default Counter;
