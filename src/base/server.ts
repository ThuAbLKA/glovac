import express, { Application, Request, Response } from "express";
import rateLimit, * as rateLimiter from 'express-rate-limit';
import { RouteType } from "./types/route.type";

interface ServerProperties {
	port: number;
	userRateLimiter?: boolean;
	useCsurf?: boolean;
	limitWindow?: number,
	maxPerWindow?: number,
	limitMessage?: string
}

class Server {
	app: Application;
	port: Number;
	userRateLimiter: boolean | undefined;
	useCsurf: boolean | undefined;
	limiter: rateLimiter.RateLimit | any;

	constructor(_properties: ServerProperties) {
		this.port = _properties.port;
		this.userRateLimiter = _properties.userRateLimiter ?? false;
		this.useCsurf = _properties.useCsurf ?? false;

		if (this.userRateLimiter) {
			this.limiter = rateLimit({
				max: _properties.maxPerWindow,
				windowMs: _properties.limitWindow,
				message: _properties.limitMessage
			});
		}
		/** init server */
		this.app = express();
	}

	start() {
		/** check all are set */
		this.app.listen(this.port, () => {
			console.log(`server started and running on ${require('os').hostname()}:${this.port}`);
		});
	}

	addRoute(route: RouteType) {
		(this.app as any)[route.method](route.path, route.controller);
	}


}

export { ServerProperties, Server }