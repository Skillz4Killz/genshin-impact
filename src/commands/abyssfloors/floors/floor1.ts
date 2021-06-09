import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "1",
  aliases: ["one"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 1")
      .setDescription(
        "**Ley Line Disorder:**\n• Pyro DMG dealt by all party members increased by 75%.\n• Overloaded DMG increased by 200%.",
      )
      .setImage("https://i.imgur.com/z20Qpvd.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
