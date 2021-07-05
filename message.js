// Put the code below at the end of your message event
const commandfile = bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
if (commandfile) {
  commandfile.run(bot, message, args);
}
