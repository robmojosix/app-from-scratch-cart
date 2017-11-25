import webpack from "webpack";
import babelOptions from "../babelrc";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import autoprefixer from "autoprefixer";
import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import cssNano from "cssnano";
import { PROD, PRERENDER } from "../utilities";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = ["./src/client/index.js"]
	.concat(PROD ? [] : ["webpack-hot-middleware/client"]);

const plugins = []
	.concat(PROD ? [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new UglifyJSPlugin(),
		new ExtractTextPlugin({
			filename: "styles.css",
			allChunks: true,
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: cssNano,
			cssProcessorOptions: { discardComments: { removeAll: true } },
			canPrint: true,
		})
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

const cssLoaders = [
	{
		loader: "css-loader",
		options: {
			modules: true,
			localIdentName: PROD
				? "[hash:base64]"
				: "[path][name]__[local]"
		}
	}, {
		loader: "postcss-loader",
		options: {
			sourceMap: true,
			plugins: [autoprefixer],
		},
	}, {
		loader: "resolve-url-loader",
	}, {
		loader: "sass-loader",
		options: {
			includePaths: [
				path.resolve(process.cwd(), "node_modules"),
				path.resolve(process.cwd(), "src/client"),
			],
		},
	}
];

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
			},
			{
				test: /\.scss$/,
				use: PROD
					? ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: cssLoaders,
					})
					: [{ loader: "style-loader" }].concat(cssLoaders),
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {}
					}
				]
			}
		]
	},
	plugins
};
