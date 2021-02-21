import { Embed } from "../../utils/Embed.ts";
import {
  createCommand,
} from "../../utils/helpers.ts";

createCommand({
  name: `teyvattimes`,
  aliases: ["tt"],
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    await message.reply({
        embed: new Embed()
          .setTitle("Need help, Traveler?")
          .setDescription([
            "You forgot to provide which one you wanna read.",
            "",
            "If you need help, try `p!help teyvattimes` or `p!help tt`",
          ])
          .setTimestamp()
      }).catch(console.log);
    },
  });
