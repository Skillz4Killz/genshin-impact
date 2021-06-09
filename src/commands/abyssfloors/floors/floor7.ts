import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "7",
  aliases: ["seven"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 7")
      .setDescription(
        "**Ley Line Disorder:**\n• CRIT hits will generate Elemental Particles and Orbs. Can only occur once every 15s.\n• CRIT DMG dealt by all party members increased by 120%.",
      )
      .setImage("https://i.imgur.com/NOnhoWf.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
