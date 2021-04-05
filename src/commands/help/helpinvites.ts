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
        `🔹 \`${prefix}invites sync\``,
        `🔹 \`${prefix}invites server\``,
        `🔹 \`${prefix}invites user [@user | userID]\``,
        `🔹 \`${prefix}invites code (invite code)\``,
        `🔹 \`${prefix}invites [reset | delete | clear]\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
