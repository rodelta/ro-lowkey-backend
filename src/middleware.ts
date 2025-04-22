import { RequestHandler } from "express";

/**
 * Middleware to logs requests to the server, with method, path, and time to respond.
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
