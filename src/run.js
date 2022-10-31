require("dotenv").config();
const { token, username, channel } = process.env;
const tmi = require("tmi.js");
const fs = require("fs");

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: username,
		password: token
	},
	channels: [ channel ]
});

client.commandArray = {};

const functionFolder = fs.readdirSync(`./src/functions`);
for (const folder of functionFolder) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleCommands();
client.handleEvents();

client.connect();
