import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "8",
  aliases: ["eight"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 8")
      .setDescription(
        "**Ley Line Disorder:**\n• When HP is less than 60%, ATK is increased by 50% and DEF is increased by 50%.\n• When HP is less than 45%, Normal Attack SPD is increased by 30%.\n• When HP is less than 45%, Movement SPD is increased by 30%.\n• When HP is less than 30%, CRIT Rate is increased by 20% and CRIT DMG is increased by 40%.\n\n• In Chamber 1, the Hydro Abyss Mage and one of the Pyro Abyss Mages are empowered.\n• In Chamber 2, the first half contains a Cryo artifact that periodically applies a massive defense buff to enemy units until the status has been removed with Pyro attacks. The second half contains a Pyro artifact that applies a massive defense buff to enemy units until the status has been removed with Hydro attacks.",
      )
      .setImage("https://i.imgur.com/BGtF7BD.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
