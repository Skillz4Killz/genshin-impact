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
        `🔹 \`${prefix}abyss floor [1 | one]\``,
        `🔹 \`${prefix}abyss floor [2 | two]\``,
        `🔹 \`${prefix}abyss floor [3 | three]\``,
        `🔹 \`${prefix}abyss floor [4 | four]\``,
        `🔹 \`${prefix}abyss floor [5 | five]\``,
        `🔹 \`${prefix}abyss floor [6 | six]\``,
        `🔹 \`${prefix}abyss floor [7 | seven]\``,
        `🔹 \`${prefix}abyss floor [8 | eight]\``,
        `🔹 \`${prefix}abyss floor [9 | nine]\``,
        `🔹 \`${prefix}abyss floor [10 | ten]\``,
        `🔹 \`${prefix}abyss floor [11 | eleven]\``,
        `🔹 \`${prefix}abyss floor [12 | twelve]\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
