import { RequestHandler } from "express";

/**
 * Logs requested path and time to response
 */
export const measureRequests: RequestHandler = (req, res, next) => {
	const path = `${req.method} ${req.originalUrl}`;
	const startTime = performance.now();

	res.on("close", () => {
		const processMS = (performance.now() - startTime).toFixed(3);
		console.log(`${path} [Done] ${processMS} ms`);
	});

	next();
};
