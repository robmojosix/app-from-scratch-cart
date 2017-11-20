import webpack from "webpack";
import babelOptions from "../babelrc";
import path from "path";
import { PROD } from "../utilities";

const entry = ["./src/client/index.js"]
	.concat(PROD ? [] : ["webpack-hot-middleware/client"]);

const plugins = []
	.concat(PROD ? [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	] : [
		new webpack.HotModuleReplacementPlugin()
	]);

export default {
	context: process.cwd(),
	entry,
	output: {
		path: path.resolve("build", "client"),
		filename: "[name].js",
		publicPath: "/"
	},
	plugins,
	resolve: {
		extensions: [".js", ".scss"]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: babelOptions
				}
			}
		]
	}
};
