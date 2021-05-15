import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "brilliantdiamond",
  aliases: ["bd", "diamond"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Brilliant Diamond")
      .setDescription([
        "**Brilliant Diamonds** are gemstones of varying quality used in the ascension of characters.\n\nBrilliant Diamonds are used exclusively by the Traveler.\n\nCan be obtained at the Adventure Guild for leveling up.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074742",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Brilliant Diamond Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n🔹 Adventure Rank 15 Reward (1x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\n<:traveler:843214509597392926> Traveler",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106075046",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106075046",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Brilliant Diamond Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n🔹 Adventure Rank 25 Reward (3x)\n🔹 Adventure Rank 26 Reward (2x)\n🔹 Adventure Rank 28 Reward (2x)\n🔹 Adventure Rank 30 Reward (2x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\n<:traveler:843214509597392926> Traveler",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074737",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074737",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Brilliant Diamond Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n🔹 Adventure Rank 35 Reward (3x)\n🔹 Adventure Rank 38 Reward (3x)\n🔹 Adventure Rank 40 Reward (3x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\n<:traveler:843214509597392926> Traveler",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106075044",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106075044",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Brilliant Diamond Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n🔹 Adventure Rank 41 Reward (2x)\n🔹 Adventure Rank 42 Reward (2x)\n🔹 Adventure Rank 45 Reward (2x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\n<:traveler:843214509597392926> Traveler",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074742",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074742",
      )
      .setFooter("Page 5/5")
      .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
      fifthEmbed,
    ]);
  },
});
