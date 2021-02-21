import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "teyvattimes",
  aliases: ["tt"],
  guildOnly: true,
  execute: async function (message) {
    const embed = new Embed()
      .setTitle("Help Teyvat Times")
      .setDescription([
        "🔹 p!teyvattimes` or `p!tt`",
        "",
        "🔹 p!teyvattimes [no1 | 1 | one]`",
        "🔹 p!teyvattimes [no2 | 2 | two]`",
        "🔹 p!teyvattimes [no3 | 3 | three]`",
        "🔹 p!teyvattimes [no4 | 4 | four]`",
      ])
      .setTimestamp()
      .setColor("RANDOM")

      await sendEmbed(message.channelID, embed).catch(console.log);
    },
  });