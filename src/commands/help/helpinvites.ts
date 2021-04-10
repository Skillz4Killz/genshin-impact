import { Embed } from "../../utils/Embed.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "invites",
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help List")
      .setDescription([
        `🔹 \`${prefix}invites code (code)\``,
        `🔹 \`${prefix}invites [delete | remove] (code)\``,
        `🔹 \`${prefix}invites [reset | clear]\``,
        `🔹 \`${prefix}invites server\``,
        `🔹 \`${prefix}invites sync\``,
        `🔹 \`${prefix}invites user [@user | userID]\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
