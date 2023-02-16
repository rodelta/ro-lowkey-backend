import "dotenv/config";
import http from "http";
import { performance } from "perf_hooks";

/**
 * Main entry point that launches a server
 * Internal code is loaded via dynamic import for better metrics,
 */

if (!process.env.NODE_ENV)
	throw new Error("Cannot read NODE_ENV. Is your .env file present?");

const PORT = process.env.PORT ? Number(process.env.PORT) : 8880;
const HOST = process.env.HOST ?? "http://localhost";
const isDev = process.env.NODE_ENV === "development";

const startServer = async () => {
	const startMs = performance.now();

	(await import("./errors")).setProcessExceptions();
	if (isDev) (await import("./errors")).prettifyErrors();

	const app = (await import("./app")).loadApp();
	const server = http.createServer(app);

	server.listen(PORT, () => {
		const executionMs = (performance.now() - startMs).toFixed(1);
		console.log(`** Server started on ${HOST}:${PORT} (${executionMs} ms)`);
	});
};

startServer();
