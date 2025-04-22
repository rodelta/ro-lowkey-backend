import { ErrorRequestHandler, RequestHandler } from "express";

export const NotFoundError: RequestHandler = (_req, res) => res.sendStatus(404);

// Express needs all 4 parameters to recognize it as error handler
export const ServerError: ErrorRequestHandler = (err, req, res, next) => {
  const status = err.status ?? 500;
  const message = err.message ?? "Server Error";
  console.error(message, err);

  res.status(status).json({ message });
};

/** Cleans out error output in the terminal */
export const prettifyErrors = (): void => {
  import("pretty-error").then((prettyError): void => {
    prettyError
      .start()
      .skipNodeFiles()
      .skipPackage("ts-node-dev", "source-map-support", "express", "jest")
      .skipPath(
        "node:internal/modules/cjs/loader",
        "node:internal/process/task_queues"
      );
  });
};

export const setProcessExceptions = (): void => {
  // process exit conditions and error handling

  process.on("SIGINT", () => {
    console.warn("Server terminated");
    process.exit(0);
  });
  process.on("uncaughtException", (err) => {
    console.error("Uncaught exception: ", err);
  });
  process.on("unhandledRejection", (err) => {
    console.error("Unhandled promise: ", err);
    process.exit(1);
  });
};
