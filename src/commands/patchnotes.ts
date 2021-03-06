import { parsePrefix } from "../monitors/commandHandler.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "patchnotes",
  aliases: ["patchnote", "update", "version"],
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    await message.reply({
      embed: new Embed()
        .setTitle("Need help, Traveler?")
        .setDescription([
          `\`${prefix}update 1.1\``,
          "'A New Star Approaches'",
          "",
          `\`${prefix}update 1.2\``,
          "'The Chalk Prince and the Dragon",
          "",
          `\`${prefix}update 1.3\``,
          "'All That Glitters'",
          "",
          `\`${prefix}update 1.5\``,
          "**not availabable yet**",
          "",
        ]),
    }).catch(console.log);
  },
});
