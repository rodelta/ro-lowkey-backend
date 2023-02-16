import type { RequestHandler } from "express";
import { getRandomNumber, getRandomString } from "../utils/random";

type SimpleHandler<T = string> = RequestHandler<never, T, never, never>;

interface ExampleJSONResponse {
	boolean: boolean;
	string: string;
	number: number;
}

export const exampleJSONGet: SimpleHandler<ExampleJSONResponse> = async (
	req,
	res,
) => {
	// Do some fancy code stuff
	res.status(200).json({
		boolean: true,
		string: getRandomString(),
		number: getRandomNumber(0, 100),
	});
};
