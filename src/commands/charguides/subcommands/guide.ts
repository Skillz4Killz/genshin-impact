import { botCache } from "../../../../cache.ts";
import { parsePrefix } from "../../../monitors/commandHandler.ts";
import { Embed } from "../../../utils/Embed.ts";
import { createCommand, createSubcommand } from "../../../utils/helpers.ts";

createSubcommand("character", {
  name: "guide",
  arguments: [{ name: "subcommand", type: "subcommand", required: false }],
  guildOnly: true,
  execute: async function (message) {
    await message.reply("hi");
    console.log("end char guide");
  },
});
