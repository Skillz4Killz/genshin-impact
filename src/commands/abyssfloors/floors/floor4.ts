import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "4",
  aliases: ["four"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 4")
      .setDescription(
        "**Ley Line Disorder:**\n• Electro DMG dealt by all party members increased by 75%.\n• Electro-Charged DMG increased by 150%, and its AoE is increased by 100%.",
      )
      .setImage("https://i.imgur.com/jXU44kL.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
