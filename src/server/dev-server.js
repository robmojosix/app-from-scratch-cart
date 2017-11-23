/* eslint-disable no-console, no-useless-escape */
import webpack from "webpack";
import path from "path";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import clearModule from "clear-module";
import config from "../../webpack/webpack.config";
import server from "./src/server";

const projectDirectory = process.cwd();
const rootFolder = path.resolve(projectDirectory, "src");

const compiler = webpack(config);

// Do "hot-reloading" throw away the cached modules and let them be re-required next time
compiler.plugin("done", function() {
	clearModule.match(new RegExp(`^${rootFolder}`, "i"));
});

// Compile with webpack & bind middleware for hot-reloading
const webpackDevMiddlewareInstance = webpackDevMiddleware(
	compiler,
	{ noInfo: true, publicPath: config.output.publicPath }
);

const webpackHotMiddlewareInstance = webpackHotMiddleware(compiler);

webpackDevMiddlewareInstance.waitUntilValid(() => {
	server.use(webpackDevMiddlewareInstance);
	server.use(webpackHotMiddlewareInstance);

	server.start();
});
