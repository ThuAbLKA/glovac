import { ControllerType } from "./contoller.type";

export type RouteType = {
	path: string;
	method: string;
	controller: ControllerType | ControllerType[]
};