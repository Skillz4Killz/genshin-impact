import { Embed } from "../../utils/Embed.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "moderation",
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Moderation")
      .setDescription([
        `🔹 \`${prefix}ban [@user | userID] (reason)\``,
        `🔹 \`${prefix}kick [@user | userID] (reason)\``,
        `🔹 \`${prefix}nick [@user | userID] (new nickname)\``,
        `🔹 \`${prefix}note [@user | userID] (reason)\``,
        `🔹 \`${prefix}purge [links | bots | invites | upload | images | messages] [@user | userID] (amount)\``,
        `🔹 \`${prefix}unban [userID] (reason)\``,
        `🔹 \`${prefix}warn [@user | userID] (reason)\``,
        `🔹 \`${prefix}modlog [@user | userID]\``,
        `🔹 \`${prefix}modlog edit (caseID) (new reason)\``,
        `🔹 \`${prefix}modlog clear [@user | userID]\``,
        "",
        "",
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
