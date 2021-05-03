import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "10",
  aliases: ["ten"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 10")
      .setDescription(
        "Enemy Level 80-85\n\n**Ley Line Disorder:**\n• Characters on the field will continuously accumulate Sheer Cold, and will continually lose HP after Sheer Cold reaches its limit.\n• Warming Seelie will appear on the field, and will continually alleviate nearby character's Sheer Cold.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:CryoAbyssMage:812702015196758036> 1x Cryo Abyss Mage\n<:CryoHilichurl:812979713848246318> 8x Cryo Hilichurl Grenadier\n<:LargeCryoSlime:812702014966333441> 6x Large Cryo Slime",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:FatuiElectroCicinMage:812678780703211522> 1x Fatui Electro Cicin Mage\n<:CryoAbyssMage:812702015196758036> 1x Cryo Abyss Mage\n<:HydroSamachurl:812678780732571660> 2x Hydro Samachurl",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:Mitachurl:812972562875154482> 1x Ice Shieldwall Mitachurl\n<:Hilichurl:812702015389564978> 8x Ice Shield Hilichurl Guard\n<:CryoHilichurl:812979713848246318> 4x Cryo Hilichurl Grenadier",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:FatuiCryoCicinMage:833066950539739208> 1x Fatui Cryo Cicin Mage\n<:TreasureHoarderElectroPotioneer:833031393864056842> 1x Treasure Hoarder Electro Potioneer\n<:TreasureHoarderCryoPotioneer:812728057894142004> 1x Treasure Hoarder Cryo Potioneer",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FatuiCryoCicinMage:833066950539739208> 1x Fatui Cryo Cicin Mage\n<:FatuiPyroAgent:812728058141736980> 1x Fatui Pyro Agent",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FrostarmLawachurl:812977848624611358> 1x Frostarm Lawachurl",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
