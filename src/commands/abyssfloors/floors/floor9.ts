import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "9",
  aliases: ["nine"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 9")
      .setDescription(
        "Enemy Level 72-76\n\n**Ley Line Disorder:**\n• Characters on the field will continuously accumulate Sheer Cold, and will continually lose HP after Sheer Cold reaches its limit.\n• There will also be a Ruin Brazier on the field. While the Ruin Brazier is activated, getting close to it will reduce Sheer Cold.\n• Enemies will attack the Ruin Braziers, preventing them from diminishing the effects of Sheer Cold in the area. Deactivated Ruin Braziers will restart after a while.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:Mitachurl:812972562875154482> 1x Ice Shieldwall Mitachurl\n<:Hilichurl:812702015389564978> 12x Ice Shield Hilichurl Guard\n<:LargeCryoSlime:812702014966333441> 2x Large Cryo Slime",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:CryoAbyssMage:812702015196758036> 2x Cryo Abyss Mage\n<:Mitachurl:812972562875154482> 1x Ice Shieldwall Mitachurl\n<:CryoSamachurl:833056493032177714> 2x Cryo Samachurl\n<:CryoHilichurl:812979713848246318> 4x Cryo Hilichurl Shooter",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:Mitachurl:812972562875154482> 1x Ice Shieldwall Mitachurl\n<:Hilichurl:812702015389564978> 4x Ice Shield Hilichurl Guard\n<:CryoHilichurl:812979713848246318> 4x Cryo Hilichurl Grenadier\n<:LargeCryoSlime:812702014966333441> 6x Large Cryo Slime",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 60/180/300 sec.\n\n<:FatuiCryogunnerLegionnaire:833051184150478948> 1x Fatui Cryogunner Legionnaire\n<:FatuiElectrohammerVanguard:833051184239476787> 1x Fatui Electrogammer Vanguard\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:FrostarmLawachurl:812977848624611358> 1x Frostarm Lawachurl\n<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 180/300/420 sec.\n\n<:CryoAbyssMage:812702015196758036> 1x Cryo Abyss Mage\n<:Mitachurl:812972562875154482> 2x Ice Shieldwall Mitachurl",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
