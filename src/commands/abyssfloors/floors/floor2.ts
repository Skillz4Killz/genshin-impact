import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "",
  aliases: ["two"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 2")
      .setDescription(
        "Enemy Level 40\n**Ley Line Disorder:**\n• Cryo DMG dealt by all party members increased by 75%.\n• The duration of the Frozen status effect is greatly increased.",
      )
      .addField(
        "Chamber 1",
        "Remaining challenge time longer than 60/90/180 sec.\n\n<:ElectroSlime:812678780862464000> 5x Electro Slime\n<:LargeElectroSlime:812678780451684443> 5x Large Electro Slime\n<:MutantElectroSlime:812678780975579146> 4x Mutant Electro Slime",
        true,
      )
      .addField(
        "Chamber 2",
        "Target defense process greater than 20/40/60%.\n\n<:HydroSlime:812678780711731201> 2x Hydro Slime\n<:LargeHydroSlime:812678780903882782> 8x Large Hydro Slime\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl\n<:HydroAbyssMage:812678780900212737> 1x Hydro Abyss Mage",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3",
        "Remaining challenge time longer than 60/90/180 sec.\n\n<:HydroSamachurl:812678780732571660> 2x Hydro Samachurl\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl\n<:HydroAbyssMage:812678780900212737> 2x Hydro Abyss Mage",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
