import webpack from "webpack";
import babelOptions from "../babelrc";
import path from "path";
import { PROD, PRERENDER } from "../utilities";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = ["./src/client/index.js"]
	.concat(PROD ? [] : ["webpack-hot-middleware/client"]);

const plugins = []
	.concat(PROD ? [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	] : [
		new webpack.HotModuleReplacementPlugin()
	])
	.concat(PRERENDER ? [
		new HtmlWebpackPlugin({
			title: "Static Rendered Page",
			filename: "index.html",
			template: "./src/server/static-render/template.ejs"
		})
	] : []);

export default {
	context: process.cwd(),
	entry,
	output: {
		path: path.resolve("build", "client"),
		filename: "[name].js",
		publicPath: "/"
	},
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
	},
	plugins
};
