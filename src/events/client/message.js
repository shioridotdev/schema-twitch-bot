module.exports = {
  name: "message",
  async execute(channel, tags, message, self, client) {
    if (self || !message.startsWith("!")) return;

    const args = message.slice(1).split(" ");
    const command = args.shift().toLowerCase();

    const commandArray = client.commandArray;

    if (commandArray[command]) client.say(channel, commandArray[command]);
  },
};
