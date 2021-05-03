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
        "Enemy Level 88-92\n\n**Ley Line Disorder:**\n• Your character will be periodically be inflicted with Slowing Water, greatly increasing your skills' CD duration until the inflicted Hydro element is removed.\n• Physical DMG dealt by all party members increased by 75%.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Target defense progress greater than 20/40/60%\n\n<:TreasureHoarderCrusher:833031393796816916> 4x Treasure Hoarder Crusher\n<:TreasureHoarderPugilist:833031393964851290> 4x treasure Hoarder Pugilist\n<:TreasureHoarderMarksman:833040625569366057> 8x Treasure Hoarder Marksman",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Target defense progress greater than 20/40/60%\n\n<:TreasureHoarderGravedigger:833031393839022081> 1x Treasure Hoarder Gravedigger\n<:TreasureHoarderSeaman:833040010508369970> 1x Treasure Hoarder Seaman\n<:TreasureHoarderHandyman:833040275299237950> 2x Treasure Hoarder Handyman\n<:TreasureHoarderPyroPotioneer:833031394006794250> 1x Treasure Hoarder Pyro Potnioneer\n<:TreasureHoarderHydroPotioneer:833031393973633044> 1x Treasure Hoarder Hydro Potnioneer\n<:TreasureHoarderElectroPotioneer:833031393864056842> 1x Treasure Hoarder Electro Potnioneer\n<:TreasureHoarderCryoPotioneer:812728057894142004> 1x Treasure Hoarder Cryo Potnioneer",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 180/300/360 sec.\n\n<:FatuiElectrohammerVanguard:833051184239476787> 2x Fatui Electrohammer Vanguard\n<:FatuiHydrogunnerLegionnaire:833052056037883954> 1x Fatui Hydrogunner Legionnaire\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 180/300/360 sec.\n\n<:FatuiElectrohammerVanguard:833051184239476787> 2x Fatui Electrohammer Vanguard\n<:FatuiHydrogunnerLegionnaire:833052056037883954> 1x Fatui Hydrogunner Legionnaire\n<:FatuiGeochanterBracer:833051183802744843> 1x Fatui Geochanter Bracer",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage\n<:FatuiCryoCicinMage:833066950539739208> 2x Fatui Cryo Cicin Mage",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:AbyssHeraldWickedTorrents:838753651127877632> 2x Abyss Herald: Wicked Torrents",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
