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
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:Geovishap:833066179903094825> 1x Geovishap (Pyro)\n<:Geovishap:833066179903094825> 1x Geovishap (Electro)",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:Geovishap:833066179903094825> 1x Geovishap (Hydro)\n<:Geovishap:833066179903094825> 1x Geovishap (Cryo)",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage\n<:FatuiCryoCicinMage:833066950539739208> 1x Fatui Cryo Cicin Mage",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiPyroAgent:812728058141736980> 2x Fatui Pyro Agent\n<:TreasureHoarderGravedigger:833031393839022081> 2x Treasure Hoarder Gravedigger",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:RuinGuard:812702015125061684> 2x Ruin Guard",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:RuinGrader:833067298473771028> 2x Ruin Grader",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
