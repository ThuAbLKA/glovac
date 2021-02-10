import { RouteType } from './base/types/route.type';
import { Server, ServerProperties } from './base/server';
import { Request, Response } from 'express';

const serverProp: ServerProperties = {
	port: 3000
};

const server: Server = new Server(serverProp);

server.addRoute({
	method: 'get',
	path: '/hello',
	controller: (req: Request, res: Response, next: Function) => {
		res.status(200).json("Welcome to the Global COVID vaccination data management syste,. This is jsut an example. (MOCK)");
	}
});

server.start();