import { parsePrefix } from "../monitors/commandHandler.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "abyss",
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    await message.reply({
      embed: new Embed()
        .setTitle("Need help, Traveler?")
        .setDescription([
          "You forgot to tell me which floor you want to check.",
          "",
          `If you need help, try \`${prefix}help abyss\``,
        ])
        .setTimestamp(),
    }).catch(console.log);
  },
});
