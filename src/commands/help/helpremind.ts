import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("help", {
  name: "remind",
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Help Reminder")
      .setDescription([
        `🔹 \`${prefix}remind create (time) (reminder)\``,
        `🔹 \`${prefix}remind create (time) (interval) (reminder)\``,
        `🔹 \`${prefix}remind delete (id)\``,
        `🔹 \`${prefix}remind list\``,
        "",
        "Example: **2d12h30m** reminds you in 2 das, 12 hours and 30 minuntes.",
        "Example: **2d12h30m 24h** reminds you in 2 das, 12 hours and 30 minuntes every 24 hours (until you delete the reminder).",
        "s = second",
        "m = minute",
        "h = hour",
        "d = day",
        "w = week",
      ])
      .setTimestamp()
      .setColor("RANDOM");

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
