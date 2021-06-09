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
        "**Ley Line Disorder:**\n• Your character will be periodically be inflicted with Slowing Water, greatly increasing your skills' CD duration until the inflicted Hydro element is removed.\n• Physical DMG dealt by all party members increased by 75%.",
      )
      .setImage("https://i.imgur.com/ESdQ1g1.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
