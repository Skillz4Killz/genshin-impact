import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "enhancementore",
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Enhancement Ore")
      .setDescription([
        "**Rarity:** ⭐",
        "",
        "**Item type:** Weapon Enhancement Material",
        "",
        "**Source:**",
        "🔹 Forging: 2x Iron Chunk, 5 Mora\n🔹 Random Event Reward",
        "",
        "**Description:**",
        "Weapon EXP material. Gives 400 EXP. A refined ingot with endless possibilities that can be used to enhance weapons."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Enhancement_Ore.png/revision/latest/scale-to-width-down/256?cb=20210106074027")
      .setFooter("Page 1/3")
      .setColor("RANDOM")
      .setTimestamp()

    const secondEmbed = new Embed()
    .setTitle("Fine Enhancement Ore")
    .setDescription([
      "**Rarity:** ⭐⭐",
      "",
      "**Item type:** Weapon Enhancement Material",
      "",
      "**Source:**",
      "🔹 Forging: 3x White Iron Chunk, 10 Mora\n🔹 Random Event Reward",
      "",
      "**Description:**",
      "Weapon EXP material. Gives 2,000 EXP. For reasons unknown, this special and refined ore can be absorbed by weapons to greatly increase their strengths."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/23/Item_Fine_Enhancement_Ore.png/revision/latest/scale-to-width-down/256?cb=20210106073916")
    .setFooter("Page 2/3")
    .setColor("RANDOM")
    .setTimestamp()

    const thirdEmbed = new Embed()
    .setTitle("Mystic Enhancement Ore")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Enhancement Material",
      "",
      "**Source:**",
      "🔹 Forging: 4x Crystal Chunk, 50 Mora\n🔹 Forging: 3x Magical Crystal Chunk, 10x Original Resin, 100 Mora\n🔹 Random Event Reward",
      "",
      "**Description:**",
      "Weapon EXP material. Gives 10,000 EXP. Legend has it that this refined ingot contains the memories of battles that had taken place on the land. The weapons that benefit from these memories naturally become sentient."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Mystic_Enhancement_Ore.png/revision/latest/scale-to-width-down/256?cb=20210106073921")
    .setFooter("Page 3/3")
    .setColor("RANDOM")
    .setTimestamp()

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
    ]);
  },
});