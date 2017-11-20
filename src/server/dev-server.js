/* eslint-disable no-console, no-useless-escape */
import webpack from "webpack";
import chokidar from "chokidar";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack/webpack.config";
import server from "./src/server";

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch("./src");

watcher.on("ready", function() {
	watcher.on("all", function() {
		console.log("Clearing /server/ module cache from server");
		Object.keys(require.cache).forEach(function(id) {
			if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
		});
	});
});

const compiler = webpack(config);

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin("done", function() {
	console.log("Clearing /client/ module cache from server");
	Object.keys(require.cache).forEach(function(id) {
		if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
	});
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
