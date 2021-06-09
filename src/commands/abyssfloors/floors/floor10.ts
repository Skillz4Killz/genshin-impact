import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "10",
  aliases: ["ten"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 10")
      .setDescription(
        "**Ley Line Disorder:**\n• Characters on the field will continuously accumulate Sheer Cold, and will continually lose HP after Sheer Cold reaches its limit.\n• Warming Seelie will appear on the field, and will continually alleviate nearby character's Sheer Cold.",
      )
      .setImage("https://i.imgur.com/pxedE5U.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
