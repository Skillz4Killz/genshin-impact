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
      .addField("Max. Rarity: ⭐⭐⭐⭐⭐", "🔹 Gladiator's Finale\n🔹 Wanderer's Troupe\n🔹 Noblesse Oblige\n🔹 Maiden Beloved\n🔹 Retracing Bolide\n🔹 Crimson Witch of Flames\n🔹 Lavawalker\n🔹 Heart of Depth\n\n🔹 Thundering Fury\n🔹 Thundersoother\n🔹 Viridescent Venerer\n🔹 Blizard Strayer\n🔹 Archaic Petra\n🔹 Bloodstained Chivalry", true)
      .addField("Max. Rarity: ⭐⭐⭐⭐", "🔹 Instructor\n🔹 Berserker\n🔹 The Exile\n🔹 Brave Heart\n🔹 Resolution of Sojourner\n🔹 Martial Artist\n🔹 Gambler\n🔹 Defender's Will\n\n🔹 Scholar\n🔹 Tiny Miracle\n🔹 Prayers for Illumination\n🔹 Prayers for Destiny\n🔹 Prayers for Wisdom\n🔹 Prayers to Springtime", true)
      .addBlankField()
      .addField("Max. Rarity: ⭐⭐⭐", "🔹 Adventurer\n🔹 Lucky Dog\n🔹 Traveling Doctor", true)
      .setTimestamp()

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
