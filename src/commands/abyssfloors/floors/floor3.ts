import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "3",
  aliases: ["three"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 3")
      .setDescription(
        "Enemy Level 45\n**Ley Line Disorder:**\n• Increases Swirl reaction DMG by 300%, and its AoE by 100%.\n• Anemo DMG dealt by all party members increased by 75%.",
      )
      .addField(
        "Chamber 1",
        "Remaining challenge time longer than 60/90/180 sec.\n\n<:CryoSlime:812702015213142068> 5x Cryo Slime\n<:LargeCryoSlime:812702014966333441> 1x Large Cryo Slime\n<:PyroSlime:812702015074467941> 5x Pyro Slime\n<:LargePyroSlime:812702015410274395> 1x Large Pyro Slime\n<:LargeElectroSlime:812678780451684443> 1x Large Electro Slime\n<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter\n<:PyroHilichurl:832996252525396000> 2x Pyro Hilichurl Shooter\n<:Hilichurl:812702015389564978> 6x Wooden Shield Hilichurl",
        true,
      )
      .addField(
        "Chamber 2",
        "Remaining challenge time longer than 60/90/180 sec.\n\n<:TreasureHoarderPyroPotioneer:833031394006794250> 4x Treasure Hoarder Pyro Potioneer\n<:TreasureHoarderHydroPotioneer:833031393973633044> 2x Treasure Hoarder Hydro Potioneer\n<:TreasureHoarderElectroPotioneer:833031393864056842> 6x Treasure Hoarder Electro Potioneer\n<:TreasureHoarderCryoPotioneer:812728057894142004> 2x Treasure Hoarder Cryo Potioneer\n<:TreasureHoarderCrusher:833031393796816916> 1x Treasure Hoarder Crusher\n<:TreasureHoarderGravedigger:833031393839022081> 1x Treasure Hoarder Gravedigger\n<:TreasureHoarderPugilist:833031393964851290> 1x Treasure Hoarder Pugilist",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3",
        "Remaining challenge time longer than 60/90/180 sec.\n\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl\n<:RuinGuard:812702015125061684> 1x Ruin Guard",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
