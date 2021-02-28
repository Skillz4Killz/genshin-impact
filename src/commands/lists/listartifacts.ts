import { parsePrefix } from "../../monitors/commandHandler.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("list", {
  name: "artifacts",
  guildOnly: true,
  execute: async function (message, args) {
    const prefix = parsePrefix(message.guildID);
    const embed = new Embed()
      .setTitle("Artifactlist")
      .setDescription([
        "",
        `*If you want to search for artifact infos, type \`${prefix}artifact (name)\`\nThe artifact name has to be lower case and without spacing.\nFor example \`${prefix}artifact defenderswill\`*`,
        "",
      ])
      .addField("Max. Rarity: ⭐⭐⭐⭐⭐", "🔹 Archaic Petra\n🔹 Blizard Strayer\n🔹 Bloodstained Chivalry\n🔹 Crimson Witch of Flames\n🔹 Gladiator's Finale\n🔹 Heart of Depth\n🔹 Lavawalker\n🔹 Maiden Beloved\n\n🔹 Noblesse Oblige\n🔹 Retracing Bolide\n🔹 Thundering Fury\n🔹 Thundersoother\n🔹 Viridescent Venerer\n🔹 Wanderer's Troupe", true)
      .addField("Max. Rarity: ⭐⭐⭐⭐", "🔹 Berserker\n🔹 Brave Heart\n🔹 Defender's Will\n🔹 Gambler\n🔹 Instructor\n🔹 Martial Artist\n🔹 Prayers for Destiny\n🔹 Prayers for Illumination\n\n🔹 Prayers for Wisdom\n🔹 Prayers to Springtime\n🔹 Resolution of Sojourner\n🔹 Scholar\n🔹 The Exile\n🔹 Tiny Miracle", true)
      .addBlankField()
      .addField("Max. Rarity: ⭐⭐⭐", "🔹 Adventurer\n🔹 Lucky Dog\n🔹 Traveling Doctor", true)
      .setTimestamp()

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
