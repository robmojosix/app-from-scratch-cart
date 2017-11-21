import cssHook from "css-modules-require-hook";

const hook = () => {
	cssHook({
		extensions: [".scss"],
	});
};

export default hook();
