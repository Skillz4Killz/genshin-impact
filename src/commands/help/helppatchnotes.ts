import { Embed } from "../../utils/Embed.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "patchnotes",
  aliases: ["update", "update", "version"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Patchnotes/Updates")
      .setDescription([
        `🔹 \`${prefix}patchnote\``,
        `🔹 \`${prefix}patchnotes\``,
        `🔹 \`${prefix}update\``,
        `🔹 \`${prefix}version\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
