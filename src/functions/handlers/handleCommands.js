const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolder = fs
      .readdirSync(`./src/commands`)
      .filter((file) => file.endsWith(".json"));
    let { commandArray } = client;

    for (const file of commandFolder) {
      const data = JSON.parse(fs.readFileSync(`./src/commands/${file}`));
      commandArray = Object.assign(commandArray, data);
    }
  };
};
