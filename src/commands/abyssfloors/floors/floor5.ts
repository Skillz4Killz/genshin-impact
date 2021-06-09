import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "5",
  aliases: ["five"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 5")
      .setDescription(
        "**Ley Line Disorder:**\n• When your character's HP is greater than 50%, ATK and DEF are increased by 25%.\n• When HP is greater than 80%, Normal Attack SPD is increased by 20%.\n• When HP is greater than 80%, Movement SPD is increased by 20%.\n• hen HP is greater than 95%, CRIT Rate is increased by 10% and CRIT DMG is increased by 20%.\n\n• In Chamber 1's First Half, one of the Large Cryo Slimes is empowered.\n• In Chamber 2, the first half contains a Cryo an Elemental Node that periodically applies a massive defense buff to enemy units until the status has been removed with Pyro attacks. The second half contains a Pyro Elemental Node that applies a massive defense buff to enemy units until the status has been removed with Hydro attacks.\n• In Chamber 3's First half, the Electro Cicin Mage is empowered and enemies affected by Electro will get the Engulfing Storm debuff.\n• In Chamber 3's Second half, the Fatui Pyro Agent is empowered with a Pyro Aura.",
      )
      .setImage("https://i.imgur.com/6lBtFGk.png")
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
