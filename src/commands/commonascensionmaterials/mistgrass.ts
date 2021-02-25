import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("material", {
  name: "mistgrass",
  aliases: ["mistgrasspollen", "mistgrasswick"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Mist Grass") 
      .setDescription([
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Fatui Cicin Mages\n🔹 Crafting", 
        "", 
        "**Mist Grass** is used for the following weaponn ascensions:" 
      ])
      .addField("⭐⭐⭐", "Debate Club\nFillet Blade\nHalberd\nMessenger\nTwin Nephrite", true)
      .addField("⭐⭐⭐⭐", "Blackcliff Pole\nBlackcliff Slasher\nDragon's Bane\nDragonspine Spear\nEye of Perception\nPrototype Amber\nPrototype Crescent\nPrototype Rancour\nRainslasher\nRoyal Spear", true)
      .addField("⭐⭐⭐⭐⭐", "Primordial Jade Cutter\nThe Unforged", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Mist_Grass.png/revision/latest/scale-to-width-down/256?cb=20201210053537")
      .setFooter("Page 1/4")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Mist Grass Pollen")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Whopperflower",
        "",
        "**Description:**",
        "Strange spores created by Mist Grass in enclosed spaces. They are the Cicins' favorite food."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Mist_Grass_Pollen.png/revision/latest/scale-to-width-down/256?cb=20201210053615")
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Mist Grass")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 40+ Fatui Cicin Mages\n🔹 Crafting: 3x Mist Grass Pollen, 50 Mora",
      "",
      "**Description:**",
      "Well-preserved Mist Grass. Some would take advantage of the Cicins' love for the Mist Grass to control them."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Mist_Grass.png/revision/latest/scale-to-width-down/256?cb=20201210053537")
    .setFooter("Page 3/4")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Mist Grass Wick")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv.60+ Fatui Cicin Mages\n🔹 Crafting: 3x Mist Grass, 125 Mora",
      "",
      "**Description:**",
      "A rare bundle of Mist Grass that gives off a faint glow. Those who carry it invite both the Cicins and misfortune."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Mist_Grass_Wick.png/revision/latest/scale-to-width-down/256?cb=20201210053456")
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