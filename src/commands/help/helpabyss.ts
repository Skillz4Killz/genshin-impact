import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "abyss",
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Domains")
      .setDescription([
        `🔹 \`${prefix}abyss floor1\``,
        `🔹 \`${prefix}abyss floor2\``,
        `🔹 \`${prefix}abyss floor3\``,
        `🔹 \`${prefix}abyss floor4\``,
        `🔹 \`${prefix}abyss floor5\``,
        `🔹 \`${prefix}abyss floor6\``,
        `🔹 \`${prefix}abyss floor7\``,
        `🔹 \`${prefix}abyss floor8\``,
        `🔹 \`${prefix}abyss floor9\``,
        `🔹 \`${prefix}abyss floor10\``,
        `🔹 \`${prefix}abyss floor11\``,
        `🔹 \`${prefix}abyss floor12\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
