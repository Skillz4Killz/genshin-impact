import { Embed } from "../../utils/Embed.ts";
import { parsePrefix } from "../../monitors/commandHandler.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "teyvattimes",
  aliases: ["tt"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Teyvat Times")
      .setDescription([
        `🔹 \`${prefix}teyvattimes\` or \`${prefix}tt\``,
        "",
        `🔹 \`${prefix}teyvattimes [1 | 2 | 3]\``,
        `🔹 \`${prefix}teyvattimes [no1 | no2 | no2]\``,
        `🔹 \`${prefix}teyvattimes [one | two | three]\``,
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
