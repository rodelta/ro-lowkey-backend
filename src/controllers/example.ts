import type { RequestHandler } from "express";
import { getRandomNumber, getRandomString } from "../utils/random";

export interface ExampleJSONResponse {
	boolean: boolean;
	string: string;
	number: number;
}

export const exampleJSONGet: RequestHandler<never, ExampleJSONResponse> =
	async (req, res) => {
		// Do some fancy code stuff
		res.status(200).json({
			boolean: true,
			string: getRandomString(),
			number: getRandomNumber(0, 100),
		});
	};
