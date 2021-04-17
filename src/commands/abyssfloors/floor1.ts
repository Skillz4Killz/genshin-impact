import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("abyss", {
  name: "floor1",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 1")
      .setDescription(
        "Enemy Level 25\n**Ley Line Disorder:**\n• Pyro DMG dealt by all party members increased by 75%.\n• Overloaded DMG increased by 200%.",
      )
      .addField(
        "Chamber 1",
        "Remaining challenge time longer than 90/150/210 sec.\n\n<:ElectroSlime:812678780862464000> 17x Electro Slime\n<:LargeElectroSlime:812678780451684443> 1x Large Electro Slime\n<:MutantElectroSlime:812678780975579146> 4x Mutant Electro Slime",
        true,
      )
      .addField(
        "Chamber 2",
        "Remaining challenge time longer than 90/150/210 sec.\n\n<:Hilichurl:812702015389564978> 6x Hilichurl Fighter\n<:Hilichurl:812702015389564978> 9x Wooden Shield Hilichurl Guard\n<:Hilichurl:812702015389564978> 2x Hilichurl Shooter\n<:PyroHilichurl:832996252525396000> 2x Pyro Hilichurl Grenadier\n<:Mitachurl:812972562875154482> 1x Wooden Shield Mitachurl\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3",
        "Remaining challenge time longer than 90/150/210 sec.\n\n<:Hilichurl:812702015389564978> 2x Hilichurl Shooter\n<:Mitachurl:812972562875154482> 1x Wooden Shield Mitachurl\n<:LargeElectroSlime:812678780451684443> 1x Large Electro Slime\n<:MutantElectroSlime:812678780975579146> 1x Mutant Electro Slime\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
