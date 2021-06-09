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
        "**Ley Line Disorder:**\n• For this floor only, the ley line flow will be normal.\n• No Ley Line Disorder.\n• Floor 12 Chamber 2 First Half has an Electro Elemental Node.",
      )
      .setImage("https://i.imgur.com/oTf3OiQ.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
