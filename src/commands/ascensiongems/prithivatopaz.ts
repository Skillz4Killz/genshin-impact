import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "prithivatopaz",
  aliases: ["pt", "prithiva"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Prithiva Topaz")
      .setDescription([
        "**Prithiva Topaz** are gemstones of varying quality used in the ascension of characters.\n\n**Prithiva Topaz** is associated with the Geo element.\n\nCan be obtained from the Geo Hypostasis, Wolf of the North Challenge, Souvenir Shop and Alchemy.\n\n**Element:** <:Geo:798483630740865044> Geo",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074712",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Prithiva Topaz Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Geo Hypostasis\n🔹 Wolf of the North Challenge Reward\n🔹 Purchased from the Souvenir Shop\n🔹 **Crafting:** 1x Sliver, 1x Dust of Azoth",
        "",
        "Prithiva Topaz Sliver is used for the following character ascensions:\n\n<:albedo:843214508462047353> Albedo\n<:ningguang:843214509606961272> Ningguang\n<:noelle:843214509380599850> Noelle\n<:zhongli:843214509605650442> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074650",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074650",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Prithiva Topaz Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Description:**\nThe currencies that flow through this land are my flesh and blood.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.40+ Geo Hypostasis\n🔹 Lv.40+ Wolf of the North Challenge Reward\n🔹 **Crafting:** 3x Prithiva Topaz Sliver, 300 Mora\n🔹 **Crafting:** 1x Fragment, 3x Dust of Azoth",
        "",
        "Prithiva Topaz Fragment is used for the following character ascensions:\n\n<:albedo:843214508462047353> Albedo\n<:ningguang:843214509606961272> Ningguang\n<:noelle:843214509380599850> Noelle\n<:zhongli:843214509605650442> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074703",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074703",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Prithiva Topaz Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Description:**\nThe currencies on this land are blood.\nI am the guarantor of the people's hard work, wisdom, and future.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.60+ Geo Hypostasis\n🔹 Lv. 60+ Wolf of the North Challenge Reward\n🔹 **Crafting:** 3x Prithiva Topaz Fragment, 900 Mora\n🔹 **Crafting:** 1x Chunk, 9x Dust of Azoth",
        "",
        "Prithiva Topaz Chunk is used for the following character ascensions:\n\n<:albedo:843214508462047353> Albedo\n<:ningguang:843214509606961272> Ningguang\n<:noelle:843214509380599850> Noelle\n<:zhongli:843214509605650442> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074708",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074708",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Prithiva Topaz Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Geo:798483630740865044> Geo",
        "",
        "**Description:**\nThe currencies that flow through this land are my flesh and blood.\nFor thus did I become the guarantor of the people's hard work, wisdom, and future.\nThis is the trust I have placed in them. Betray it, and you taint my blood.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.75+ Geo Hypostasis\n🔹 Lv. 75+ Wolf of the North Challenge Reward\🔹 **Crafting:** 3x Prithiva Topaz Chunk, 2.700 Mora\n🔹 **Crafting:** 1x Gemstone, 27x Dust of Azoth",
        "",
        "Prithiva Topaz Gemstone is used for the following character ascensions:\n\n<:albedo:843214508462047353> Albedo\n<:ningguang:843214509606961272> Ningguang\n<:noelle:843214509380599850> Noelle\n<:zhongli:843214509605650442> Zhongli",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074712",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074712",
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
