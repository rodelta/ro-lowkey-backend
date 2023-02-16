import express from "express";
import { ServerError } from "./errors";

export const loadApp = (): Express.Application => {
	console.log("loading app");

	const app = express();
	app.use(express.json());

	app.get("/", (req, res) => res.status(200).send("Server up 🎈"));

	app.use(ServerError);

	return app;
};
