import express from "express";
import { NotFoundError, ServerError } from "./errors";
import { measureRequests } from "./middleware";
import { exampleRouter } from "./routes";

export const loadApp = (): Express.Application => {
  console.log("loading app");

  const app = express();
  app.use(express.json());
  app.use(measureRequests);

  app.get("/", (req, res) => res.status(200).send("Server up 🎈"));

  app.use(exampleRouter);

  app.use(NotFoundError);
  app.use(ServerError);

  return app;
};
