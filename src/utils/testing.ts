import type { jest } from "@jest/globals";
import type { Response } from "express";

/**
 * Takes a res object, returns the last call of res.json();
 */
export const getLastJsonCall = <T>(res: Response<T>): T => {
	const mock = (res.json as jest.Mock<typeof res.json>).mock;

	if (!mock.lastCall?.[0])
		throw new Error("res.json mock does not contain a last call");
	return mock.lastCall?.[0];
};
