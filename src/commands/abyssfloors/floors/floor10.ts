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
        "**Ley Line Disorder:**\n• Characters on the field will continuously accumulate Sheer Cold, and will continually lose HP after Sheer Cold reaches its limit.\n• Warming Seelie will appear on the field, and will continually alleviate nearby character's Sheer Cold.\n\n• In Chamber 1's First Half, the Hydro Abyss Mage is empowered with a Hydro aura.\n• In Chamber 1 and 2's Second Half, the Cryo Abyss Mage is empowered with a Cryo aura.\n• In Chamber 3's Second Half, the Hydro Abyss mage is empowered with a black aura.",
      )
      .setImage("https://i.imgur.com/FTYsffx.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
