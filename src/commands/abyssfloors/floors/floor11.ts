import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "11",
  aliases: ["eleven"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 11")
      .setDescription(
        "Enemy Level 88-92\n\n**Ley Line Disorder:**\n• Your character will be periodically be inflicted with Engulfing Storm, which continuously drains your Elemental Energy until the inflicted Electro is removed.\n• Cryo DMG dealt by all party members increased by 75%.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:HydroAbyssMage:812678780900212737> 1x Hydro Abyss Mage\n<:LargeElectroSlime:812678780451684443> 4x Large Electro Slime\n<:MutantElectroSlime:812678780975579146> 3x Mutant Electro Slime\n<:LargeHydroSlime:812678780903882782> 6x Large Hydro Slime",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:Mitachurl:812972562875154482> 3x Rock Shieldwall Mitachurl\n<:Mitachurl:812972562875154482> 3x Blazing Axe Mitachurl",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Target defense process greater than 20/40/60%.\n\n<:Mitachurl:812972562875154482> 1x Wooden Shieldwall Mitachurl\n<:Mitachurl:812972562875154482> 1x Blazing Axe Mitachurl\n<:Hilichurl:812702015389564978> 4x Rock Shield Hilichurl Guard\n<:PyroHilichurl:832996252525396000> 4x Hilichurl Berserker\<:PyroHilichurl:832996252525396000> 4x Pyro Hilichurl Shooter\n <:ElectroHilichurl:833037499488141312> 4x Electro Hilichurl Shooter",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Target defense process greater than 20/40/60%.\n\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage\n<:FatuiPyroAgent:812728058141736980> 1x Fatui Pyro Agent\n<:TreasureHoarderGravedigger:833031393839022081> 1x Treasure Hoarder Gravedigger\n<:TreasureHoarderPugilist:833031393964851290> 1x Treasure Hoarder Pugilist\n<:TreasureHoarderCrusher:833031393796816916> 1x Treasure Hoarder Crusher\n<:TreasureHoarderPyroPotioneer:833031394006794250> 1x Treasure Hoarder Pyro Potioneer\n<:TreasureHoarderCryoPotioneer:812728057894142004> 1x Treasure Hoarder Cryo Potioneer",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard\n<:FatuiElectrohammerVanguard:833051184239476787> 2x Fatui Electrohammer Vanguard\n<:FatuiGeochanterBracer:833051183802744843> 1x Fatui Geochanter Bracer\n<:FatuiHydrogunnerLegionnaire:833052056037883954> 2x Fatu Hydrogunner Legionnaire",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiPyroAgent:812728058141736980> 2x Fatui Pyro Agent\n<:FatuiElectroCicinMage:812678780703211522> 2x Fatui Electro Cicin Mage",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
