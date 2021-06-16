import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "12",
  aliases: ["twelve"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 12")
      .setDescription(
        "**Ley Line Disorder:**\n• For this floor only, the ley line flow will be normal.",
      )
      .setImage(
        "https://i.imgur.com/S6gO4tw.png",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
