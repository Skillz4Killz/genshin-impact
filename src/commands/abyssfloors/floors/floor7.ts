import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "7",
  aliases: ["seven"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 7")
      .setDescription(
        "Enemy Level 65\n\n**Ley Line Disorder:**\n• CRIT hits will generate Elemental Particles and Orbs. Can only occur once every 15s.\n• CRIT DMG dealt by all party members increased by 120%.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 120/300/420 sec.\n\n<:FatuiCryogunnerLegionnaire:833051184150478948> 1x Fatui Cryogunner Legionnaire\n<:FatuiHydrogunnerLegionnaire:833052056037883954> 1x Fatui Hydrogunner Legionnaire\n<:FatuiElectrohammerVanguard:833051184239476787> 1x Fatui Electrohammer Vanguard",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 120/300/420 sec.\n\n<:FatuiCryogunnerLegionnaire:833051184150478948> 1x Fatui Cryogunner Legionnaire\n<:FatuiPyroslingerBracer:833051184158998538> 1x Fatui Pyroslinger Bracer\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 120/300/390 sec.\n\n<:FatuiCryogunnerLegionnaire:833051184150478948> 1x Fatui Cryogunner Legionnaire\n<:FatuiGeochanterBracer:833051183802744843> 1x Fatui Geochanter Bracer\n<:FatuiElectrohammerVanguard:833051184239476787> 1x Fatui Electrohammer Vanguard",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 120/300/390 sec.\n\n<:FatuiGeochanterBracer:833051183802744843> 1x Fatui Geochanter Bracer\n<:FatuiPyroslingerBracer:833051184158998538> 1x Fatui Pyroslinger Bracer\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 120/330/450 sec.\n\n<:FatuiHydrogunnerLegionnaire:833052056037883954> 1x Fatui Hydrogunner Legionnaire\n<:FatuiElectrohammerVanguard:833051184239476787> 1x Fatui Electrohammer Vanguard\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 120/330/450 sec.\n\n<:FatuiPyroslingerBracer:833051184158998538> 1x Fatui Pyroslinger Bracer\n<:FatuiElectrohammerVanguard:833051184239476787> 1x Fatui Electrohammer Vanguard\n<:FatuiAnemoboxerVanguard:833051183916384277> 1x Fatui Anemoboxer Vanguard",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
