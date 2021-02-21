import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "list",
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    await message.reply({
      embed: new Embed()
        .setTitle("Need help, Traveler?")
        .setDescription([
          "You forgot to tell me which lsit you need.",
          "",
          "If you need help, try `p!help list`",
        ])
        .setTimestamp()
    }).catch(console.log);
  },
});
