import express from "express";
const app = express();
const port = 3000;

const Router = require("./router");
const logger = require("./logger")

const server = app.listen(port, () => {
	logger.log(`Server is now listening on port ${port}`, "info");
});

function close() {
	server.close();
	console.log("")
}

process.on("uncaughtException", (error : any) => {
	console.log("[PROCESS] An error occured:")
	console.error(error);
});

process.on("exit", () => close());
process.on("SIGTERM", () => close());
process.on("SIGINT", () => close());
process.on("SIGHUP", () => close());
process.on("SIGUSR2", () => close());
process.on("beforeExit", () => close())
