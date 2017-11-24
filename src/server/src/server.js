/* eslint-disable no-console, class-methods-use-this */
import http from "http";
import express from "express";
import { argv } from "optimist";
import { PROD, PRERENDER, serverRendererPath } from "../../../utilities";

const PORT = PROD ? 8080 : 3000;

export default new class Server {
	constructor() {
		this.app = express();
		if (argv.autostart) {
			this.start();
		}
	}

	start() {
		this.app.use(express.static("build/client"));
		this.app.renderDevPage = require(serverRendererPath).renderDevPage;
		if(!PRERENDER) {
			this.app.get("/", (req, res) => {
				this.app.renderDevPage(req, res);
			});
		}

		// catch 404 and forward to error handler
		this.app.use((req, res, next) => {
			const err = new Error(`${req.url} not Found`);
			err.status = 404;
			next(err);
		});

		// development error handler
		if (!PROD) {
			this.app.use((err, req, res) => {
				console.error("error : ", err);
				res.status(err.status || 500);
			});
		}

		// production error handler
		this.app.use((err, req, res) => {
			console.error("error : ", err.message);
			res.status(err.status || 500);
		});

		const server = http.createServer(this.app);

		server.listen(PORT, function() {
			console.log(`Listening on localhost${PORT}`);
		});
	}

	// add cutom middlewares
	use(...middlewareOptions) {
		this.app.use(...middlewareOptions);
	}

	// add dev serevr hot reload middlewares
	useHotReload(hotReloadMiddleware) {
		this.app.use((req, res, next) => {
			hotReloadMiddleware(this.app)(req, res, next);
		});
	}
}();
