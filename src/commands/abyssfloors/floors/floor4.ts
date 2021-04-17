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
        "Enemy Level 50\n**Ley Line Disorder:**\n• Electro DMG dealt by all party members increased by 75%.\n• Electro-Charged DMG increased by 150%, and its AoE is increased by 100%.",
      )
      .addField(
        "Chamber 1",
        "Remaining challenge time longer than 60/120/180 sec.\n\n<:HydroSlime:812678780711731201> 4x Hydro Slime\n<:LargeHydroSlime:812678780903882782> 7x Large Hydro Slime\n<:Hilichurl:812702015389564978> 8x Hilichurl Fighter\n<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter\n<:HydroAbyssMage:812678780900212737> 2x Hydro Abyss Mage",
        true,
      )
      .addField(
        "Chamber 2",
        "Target defense process greater than 20/40/60%.\n\n<:HydroSlime:812678780711731201> 10x Hydro Slime\n<:Hilichurl:812702015389564978> 4x Hilichurl Fighter\n<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter\n<:PyroHilichurl:832996252525396000> 3x Hilichurl Berserker\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl\n<:HydroAbyssMage:812678780900212737> 2x Hydro Abyss Mage",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3",
        "Remaining challenge time longer than 60/120/180 sec.\n\n<:Hilichurl:812702015389564978> 2x Hilichurl Fighter\n<:CryoHilichurl:812979713848246318> 1x Cryo Hilichurl Shooter\n<:HydroSamachurl:812678780732571660> 1x Hydro Samachurl\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl\n<:HydroAbyssMage:812678780900212737> 2x Hydro Abyss Mage",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
