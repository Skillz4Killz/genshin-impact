import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "3",
  aliases: ["three"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 3")
      .setDescription(
        "**Ley Line Disorder:**\n• Increases Swirl reaction DMG by 300%, and its AoE by 100%.\n• Anemo DMG dealt by all party members increased by 75%.",
      )
      .setImage("https://i.imgur.com/pqoSLql.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
