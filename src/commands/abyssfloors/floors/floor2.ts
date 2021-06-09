import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "2",
  aliases: ["two"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 2")
      .setDescription(
        "**Ley Line Disorder:**\n• Cryo DMG dealt by all party members increased by 75%.\n• The duration of the Frozen status effect is greatly increased.",
      )
      .setImage("https://i.imgur.com/Gz1MIhu.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
