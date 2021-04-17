import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("abyss", {
  name: "floor5",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 5")
      .setDescription(
        "Enemy Level 55\n**Ley Line Disorder:**\n• When your character's HP is greater than 50%, ATK and DEF are increased by 25%.\n• When HP is greater than 80%, Normal Attack SPD is increased by 20%.\n• When HP is greater than 80%, Movement SPD is increased by 20%.\n• When HP is greater than 95%, CRIT Rate is increased by 10% and CRIT DMG is increased by 20%.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:CryoSlime:812702015213142068> 5x Cryo Slime\n<:LargeCryoSlime:812702014966333441> 12x Large Cryo Slime\n<:ElectroHilichurl:833037499488141312> 3x Electro Hilichurl Shooter",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:PyroAbyssMage:812702015024136254> 2x Pyro Abyss Mage",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 90/180/240 sec.\n\n<:TreasureHoarderGravedigger:833031393839022081> 1x Treasure Hoarder Gravedigger\n<:TreasureHoarderSeaman:833040010508369970> 2x Treasure Hoarder Seaman\n<:TreasureHoarderHandyman:833040275299237950> 4x Treasure Hoarder Handyman\n<:TreasureHoarderCryoPotioneer:812728057894142004> 2x Treasure Hoarder Cryo Potioneer\n<:TreasureHoarderMarksman:833040625569366057> 4x Treasure Hoarder Marksman",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 90/180/240 sec.\n\n<:TreasureHoarderCrusher:833031393796816916> 2x Treasure Hoarder Crusher\n<:TreasureHoarderPugilist:833031393964851290> 4x Treasure Hoarder Pugilist\n<:TreasureHoarderSeaman:833040010508369970> 1x Treasure Hoarder Seaman\n<:TreasureHoarderPyroPotioneer:833031394006794250> 2x Treasure Hoarder Pyro Potioneer\n<:TreasureHoarder:812728057965051915> 4x Treasure Hoarder Scout",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage\n<:TreasureHoarderHandyman:833040275299237950> 2x Treasure Hoarder Handyman",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiPyroAgent:812728058141736980> 1x Fatui Pyro Agent\n<:TreasureHoarderElectroPotioneer:833031393864056842> 2x Treasure Hoarder Electro Potioneer",
        true,
      )
      .addBlankField()
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
