import { Router } from "express";
import { exampleJSONGet } from "./controllers/example";

export const exampleRouter = Router();

// Just a placeholder to be replaced with something useful
exampleRouter.get("/json", exampleJSONGet);
