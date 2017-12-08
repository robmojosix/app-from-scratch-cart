import React from "react";
import PropTypes from "prop-types";

const Component = (props) => {

	const {plus, minus, total} = props;

	return (
		<div>
			{"PAGE 1"}
			<h1>{total}</h1>
			<button onClick={plus} >{"+"}</button>
			<button onClick={minus} >{"-"}</button>
		</div>
	);
};

Component.propTypes = {
	plus: PropTypes.func.isRequired,
	minus: PropTypes.func.isRequired,
	total: PropTypes.number.isRequired
};

export default Component;
