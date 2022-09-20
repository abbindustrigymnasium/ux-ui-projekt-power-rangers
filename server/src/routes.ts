const fs = require("fs")
const path = require("path")
const { Router } = require("express");

module.exports = (server: any) => {
	let route: any;
	fs.readdirSync(path.join(__dirname, "routes/")).forEach((file: File) => {
		route = require(`./routes/${file}`)(Router);
		server.app.use(`/${route.name}`, route.route);
		console.log(`Loaded route ${file} at '/${route.name}'`)
	})
}
