import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "dandeliongladiator",
  aliases: ["fettersofthedandeliongladiator", "chainsofthedandeliongladiator", "shacklesofthedandeliongladiator", "dreamofthedandeliongladiator"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Dandelion Gladiator")
      .setDescription([
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "🔹 Cecilia Garden *(Wednesday/Saturday/Sunday)*",
        "",
        "**Aerosiderite** is used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Otherworldly Story\nRecurve Bow\nTraveler's Handy Sword\nWhite Iron Greatsword", true)
      .addField("⭐⭐⭐⭐", "Favonius Greatsword\nFavonius Lance\nFavonius Warbow\nFestering Desire\nFrostbearer\nRoyal Bow\nRoyal Greatsword\nSacrificial Fragments\nSacrificial Sword", true)
      .addField("⭐⭐⭐⭐⭐", "Amos' Bow\nLost Prayer to the Sacred Winds\nSkyward Spin\nWolf's Gravestone", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Chains_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/256?cb=20210109215957")
      .setFooter("Page 1/5")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Fetters of the Dandelion Gladiator")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Weapon Ascension Material",
        "",
        "**Source:**",
        "🔹 Cecilia Garden *(Wednesday/Saturday/Sunday)*",
        "",
        "**Description:**",
        "It's a human thing to exaggerate on a hero's story, even to the point of elevating the fetters that once bound the hero to the level of an enemy of true freedom.\nAs a result, these fetters were granted extraordinary powers."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Fetters_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/256?cb=20210109220002")
      .setFooter("Page 2/5")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Chains of the Dandelion Gladiator")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "🔹 Cecilia Garden *(Wednesday/Saturday/Sunday)*\n🔹 Crafting: 3x Fetters of the Dandelion Gladiator, 125 Mora",
      "",
      "**Description:**",
      "The chains that once bound the great hero Vennessa. In truth, all gladiators would have worn chains in that era, and Vennessa was but one of them."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Chains_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/256?cb=20210109215957")
    .setFooter("Page 3/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Shackles of the Dandelion Gladiator")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "🔹 Cecilia Garden *(Wednesday/Saturday/Sunday)*\n🔹 Crafting: 3x Chains of the Dandelion Gladiator, 350 Mora",
      "",
      "**Description:**",
      "Vennessa was not truly bound by her chains. If she had so wished, no ordinary physical constraints forged in Mondstadt could have held her, for the land there yielded no ore of exceptional quality, nor did it possess the divine flame of her ancestral home.\nShe was only bound by her responsibility to take care of her tribespeople."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Shackles_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/256?cb=20210109215939")
    .setFooter("Page 4/5")
    .setTimestamp()
    .setColor("RANDOM");

    const fifthEmbed = new Embed()
    .setTitle("Chunk of Aerosiderite")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐⭐",
      "",
      "**Item type:** Weapon Ascension Material",
      "",
      "**Source:**",
      "🔹 Cecilia Garden *(Wednesday/Saturday/Sunday)*\n🔹 Crafting: 3x Shackles of the Dandelion Gladiator, 1,075 Mora",
      "",
      "**Description:**",
      "Vennessa was freed from her slavery, but that which constrained her only grew greater - from her tribesmen to all of Mondstadt, and even to the concept of freedom itself, extending to the whole world.\nWhat she really hoped for, in truth, was that the world might grow stronger."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Dream_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/256?cb=20210109215951")
    .setFooter("Page 5/5")
    .setTimestamp()
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