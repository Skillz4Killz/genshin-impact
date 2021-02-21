import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "material",
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    await message.reply({
      embed: new Embed()
        .setTitle("Need help, Traveler?")
        .setDescription([
          "You forgot to provide the name of a material.",
          "",
          "If you need help, try `p!help materials`",
        ])
        .setTimestamp()
    }).catch(console.log);
  },
});
