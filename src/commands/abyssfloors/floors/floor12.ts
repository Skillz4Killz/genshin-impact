import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "12",
  aliases: ["twelve"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 12")
      .setDescription(
        "Enemy Level 95-100\n\n**Ley Line Disorder:**\n• For this floor only, the ley line flow will be normal.\n• No Ley Line Disorder.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:Geovishap:833066179903094825> 1x Geovishap (Electro)\n<:PyroWhopperflower:833044378763264030> 2x Pyro Whopperflower",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:Geovishap:833066179903094825> 1x Geovishap (Hydro)\n<:CryoWhopperflower:833043770320617492> 2x Cryo Whopperflower",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:TreasureHoarderGravedigger:833031393839022081> 1x Treasure Hoarder Gravedigger\n<:TreasureHoarderSeaman:833040010508369970> 1x Treasure Hoarder Seaman\n<:TreasureHoarderPugilist:833031393964851290> 1x Treasure Hoarder Pugilist\n<:TreasureHoarderCrusher:833031393796816916> 1x Treasure Hoarder Crusher\n<:TreasureHoarderPyroPotioneer:833031394006794250> 1x Treasure Hoarder Pyro Potioneer\n<:TreasureHoarderHydroPotioneer:833031393973633044> 1x Treasure Hoarder Hydro Potioneer\n<:TreasureHoarderElectroPotioneer:833031393864056842> 2x Treasure Hoarder Electro Potioneer\n<:ElectroCicin:838754270596956181> 4x Electro Cicin\n<:HydroCicin:838754270719115294> 2x Hydro Cicin\n<:CryoCicin:838754270736154674> 2x Cryo Cicin",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:PyroAbyssMage:812702015024136254> 1x Pyro Abyss Mage\n<:HydroAbyssMage:812678780900212737> 1x Hydro Abyss Mage\n<:HydroMimic:838755116403130478> 2x Hydro Mimic Boar\n<:HydroMimic:838755116403130478> 2x Hydro Mimic Crane\n<:HydroMimic:838755116403130478> 2x Hydro Mimic Crab\n<:HydroMimic:838755116403130478> 2x Hydro Mimic Mallard\n<:HydroMimic:838755116403130478> 2x Hydro Mimic Ferret",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:AbyssLectorVioletLightning:838755869227352095> 2x Abyss Lector: Violet Lightning",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiPyroAgent:812728058141736980> 1x Fatui Pyro Agent\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage\n<:FatuiCryoCicinMage:833066950539739208> 1x Fatui Cryo Cicin Mage",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
