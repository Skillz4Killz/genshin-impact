import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "agnidusagate",
  aliases: ["aa", "agnidus"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Agnidus Agate")
      .setDescription([
        "**Agnidus Agate** are gemstones of varying quality used in the ascension of characters.\n\n**Agnidus Agate** is associated with the Pyro element.\n\nCan be obtained from the Pyro Regisvine, Wolf of the North Challenge, Souvenir Shop and Alchemy.\n\n**Element:** <:Pyro:798483485832249354> Pyro",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Agnidus Agate Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Pyro Regisvine\n🔹 Wolf of the North Challenge\n🔹 Purchased from the Souvenir Shop\n🔹 **Crafting:** 1x Sliver, 1x Dust of Azoth",
        "",
        "Agnidus Agate Sliver is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Agnidus Agate Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Description:**\nA pilgrimage for a wish; a battle to earn a name...",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.40+ Pyro Regisvine\n🔹 Lv.40+ Wolf of the North Challenge\n🔹 **Crafting:** 3x Agnidus Agate Sliver, 300 Mora\n🔹 **Crafting:** 1x Fragment, 3x Dust of Azoth",
        "",
        "Agnidus Agate Fragment is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Agnidus Agate Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Description:**\nA pilgrimage for a wish; a battle to earn a name… Burnt to cinders for a dream.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.60+ Pyro Regisvine\n🔹 Lv.60+ Wolf of the North Challenge\n🔹 **Crafting:** 3x Agnidus Agate Fragment, 900 Mora\n🔹 **Crafting:** 1x Chun, 9x Dust of Azoth",
        "",
        "Agnidus Agate Chunk is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Item_Agnidus_Agate_Chunk.png",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Agnidus Agate Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Pyro:798483485832249354> Pyro",
        "",
        "**Description:**\nA pilgrimage for a wish; a battle to earn a name...\nBurnt to cinders for a dream.\nIf the intention yet remains, achieved ██'s truth he has.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.75+ Pyro Regisvine\n🔹 Lv.75+ Wolf of the North Challenge\n🔹 **Crafting:** 3x Agnidus Agate Chunk, 2.700 Mora\n🔹 **Crafting:** 1x Gemstone, 27x Dust of Azoth",
        "",
        "Agnidus Agate Gemstone is used for the following character ascensions:\n\n<:Amber:798579318262988810> Amber\n<:Bennett:798579139430973500> Bennett\n<:Diluc:798579247945613332> Diluc\n<:Klee:798578917464080404> Klee\n<:Xiangling:798578032935436329> Xianling\n<:Xinyan:798577406427529246> Xinyan",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png",
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