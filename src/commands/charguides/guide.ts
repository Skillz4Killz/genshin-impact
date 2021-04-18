import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createCommand, createSubcommand } from "../../utils/helpers.ts";

createSubcommand("character", {
  name: "guide",
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    await message.reply({
      embed: new Embed()
        .setTitle("Need help, Traveler?")
        .setDescription([
          "You forgot to tell me which guide you need.",
          "",
          `If you need help, try \`${prefix}help guides\``,
        ])
        .setTimestamp()
        .setColor("RANDOM"),
    }).catch(console.log);
  },
});
