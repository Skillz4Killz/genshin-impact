
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("material", {
  name: "deadleyline",
  aliases: ["deadleylinebranch", "deadleylineleaves", "leylinesprouts"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Dead Ley Line Branch, Dead Ley Line Leaves and Ley Line Sprouts")
      .setDescription([
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Abyss Mages\n🔹 Crafting",
        "",
        "**Dead Ley Line Branch, Dead Ley Line Leaves and Ley Line Sprouts** are used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Bloodtainted Greatsword\nHarbinger of Dawn\nSharpshooter's Oath\nThrilling Tales of Dragon Slayers	", true)
      .addField("⭐⭐⭐⭐", "Alley Hunter\nDeathmatch\nSacrificial Bow\nSacrificial Greatsword\nSword of Descension\nThe Black Sword\nThe Flute\nThe Widsith\nWine and Song", true)
      .addField("⭐⭐⭐⭐⭐", "Skyward Atlas\nSkyward Blade\nSkyward Harp\nSkyward Pride", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Dead_Ley_Line_Leaves.png/revision/latest/scale-to-width-down/256?cb=20210106071145")
      .setFooter("Page 1/4")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Dead Ley Line Branch")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Abyss Mages",
        "",
        "**Description:**",
        "Fragile branches from deep within the earth. Even after years of age, from beneath it's mottled surface you can see that its power is not yet entirely lost."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Dead_Ley_Line_Branch.png/revision/latest/scale-to-width-down/256?cb=20210106071133")
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Dead Ley Line Leaves")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 40 Abyss Mages\n🔹 Crafting: 3x Dead Ley Line Branch, 50 Mora",
      "",
      "**Description:**",
      "A twig from deep within the earth. Though it is far from where it once lay, its leaves still pulsate with energy."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Dead_Ley_Line_Leaves.png/revision/latest/scale-to-width-down/256?cb=20210106071145")
    .setFooter("Page 3/4")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Ley Line Sprouts")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 40 Abyss Mages\n🔹 Crafting: 3x Dead Ley Line Leaves, 125 Mora",
      "",
      "**Description:**",
      "It is said that there was a great tree whose roots once spread out to every corner of the world, and this branch is said to be part of it. It is almost if it was never broken off and taken far away, for its vitality is such that it still sprouts new leaves even now."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/2/22/Item_Ley_Line_Sprouts.png/revision/latest/scale-to-width-down/256?cb=20210106071202")
    .setFooter("Page 4/4")
    .setTimestamp()
    .setColor("RANDOM");

    createPagination(message, [
      firstEmbed,
      secondEmbed,
      thirdEmbed,
      fourthEmbed,
    ]);
  },
});