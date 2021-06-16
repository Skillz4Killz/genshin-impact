import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "11",
  aliases: ["eleven"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 11")
      .setDescription(
        "**Ley Line Disorder:**\n• Increases Swirl DMG by 300% and AoE by 100%",
      )
      // **TODO** Fix enemy count
      .setImage("https://i.imgur.com/TkLMU9n.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
