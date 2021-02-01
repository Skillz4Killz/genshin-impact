import { Embed } from "../utils/Embed.ts";
import {
  createCommand,
} from "../utils/helpers.ts";

createCommand({
  name: "patchnotes",
  aliases: ["patchnote", "update", "version"],
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    await message.reply({
      embed: new Embed()
        .setTitle("Need help, Traveler?")
        .setDescription([
          "`p!update 1.1`",
          "**not availabable yet**",
          "",
          "`p!update 1.2`",
          "**not availabable yet**",
          "",
          "`p!update 1.3`",
          "'All That Glitters'",
          "",
        ]),
    }).catch(console.log);
  },
});
