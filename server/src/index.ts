import express from "express";
const path = require("path");
const bodyParser = require("body-parser");

let server: any = {};

server.app = express();
server.port = 3000;

server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json())

server.app.use(express.static(path.join(__dirname, "public")));

server.db = require("../../db.json")

server.logger = require("./logger");

require("./routes")(server);

server.live = server.app.listen(server.port, () => {
	server.logger.log(`Server is now listening on port ${server.port}`, "info");
});

server.app.set('server', server);

function close() {
	server.live.close();
	console.log("")
}

process.on("uncaughtException", (error : any) => {
	console.log("[PROCESS] An error occured:");
	console.error(error);
});

process.on("exit", () => close());
process.on("SIGTERM", () => close());
process.on("SIGINT", () => close());
process.on("SIGHUP", () => close());
process.on("SIGUSR2", () => close());
process.on("beforeExit", () => close())
