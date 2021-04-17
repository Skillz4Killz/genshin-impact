import { Embed } from "../../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../../utils/helpers.ts";

createSubcommand("abyss-floor", {
  name: "8",
  aliases: ["eight"],
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Spiral Abyss Floor 8")
      .setDescription(
        "Enemy Level 70\n\n**Ley Line Disorder:**\n• When HP is less than 60%, ATK is increased by 50% and DEF is increased by 50%.\n• When HP is less than 45%, Normal Attack SPD is increased by 30%.\n• When HP is less than 45%, Movement SPD is increased by 30%.\n• When HP is less than 30%, CRIT Rate is increased by 20% and CRIT DMG is increased by 40%.",
      )
      .addField(
        "Chamber 1 (First Half)",
        "Remaining challenge time longer than 180/330/420 sec.\n\n<:HydroAbyssMage:812678780900212737> 1x Hydro Abyss Mage\n<:CryoAbyssMage:812702015196758036> 1x Cryo Abyss Mage",
        true,
      )
      .addField(
        "Chamber 1 (Second Half)",
        "Remaining challenge time longer than 180/330/420 sec.\n\n<:PyroAbyssMage:812702015024136254> 1x Cryo Abyss Mage",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 2 (First Half)",
        "Remaining challenge time longer than 180/300/360 sec.\n\n<:Hilichurl:812702015389564978> 1x Hilichurl Fighter\n<:Hilichurl:812702015389564978> 2x Hilichurl Shooter\n<:Hilichurl:812702015389564978> 1x Wooden Shield Hilichurl Guard\n<:CryoHilichurl:812979713848246318> 2x Cryo Hilichurl Shooter\n<:RuinGuard:812702015125061684> 1x Ruin Guard",
        true,
      )
      .addField(
        "Chamber 2 (Second Half)",
        "Remaining challenge time longer than 180/300/360 sec.\n\n<:PyroHilichurl:832996252525396000> 2x Pyro Hilichurl Shooter\n<:PyroHilichurl:832996252525396000> 3x Hilichurl Berserker\n<:PyroHilichurl:832996252525396000> 2x Pyro Hilichurl Grenadier\n<:RuinGuard:812702015125061684> 1x Ruin Guard",
        true,
      )
      .addBlankField()
      .addField(
        "Chamber 3 (First Half)",
        "Remaining challenge time longer than 60/120/180 sec.\n\n<:CryoRegisvine:833055136854048780> 1x Cryo Regisvine",
        true,
      )
      .addField(
        "Chamber 3 (Second Half)",
        "Remaining challenge time longer than 60/120/180 sec.\n\n<:PyroRegisvine:833055137064550402> 1x Pyro Regisvine",
        true,
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
