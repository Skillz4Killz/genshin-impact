import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "vajradaamethyst",
  aliases: ["va", "vajrada"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Vajrada Amethyst")
      .setDescription([
        "**Vajrada Amethyst** are gemstones of varying quality used in the ascension of characters.\n\n**Vajrada Amethyst** is associated with the Electro element.\n\nCan be obtained from the Electro Hypostasis Souvenir Shop and Alchemy.\n\n**Element:** <:Electro:798483560205385799> Electro",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Vajrada_Amethyst_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074821",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Vajrada Amethyst Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Electro:798483560205385799> Electro",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Electro Hypostasis\n🔹 Purchased from the Souvenir Shop\n🔹 **Crafting:** 1x Sliver, 1x Dust of Azoth",
        "",
        "Vajrada Amethyst Sliver is used for the following character ascensions:\n\n<:Beidou:798579120479928360> Beidou\n<:Fischl:798579031381114890> Fischl\n<:Keqing:798578899956006914> Keqing\n<:Lisa:798578725716361267> Lisa\n<:Razor:798578623900024862> Razor",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Vajrada_Amethyst_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074806",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Vajrada_Amethyst_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074806",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Vajrada Amethyst Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Electro:798483560205385799> Electro",
        "",
        "**Description:**\nThis body is the noblest and most eminent of all in this world.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.40+ Electro Hypostasis\n🔹 **Crafting:** 3x Vajrada Amethyst Sliver, 300 Mora\n🔹 **Crafting:** 1x Fragment, 3x Dust of Azoth",
        "",
        "Vajrada Amethyst Fragment is used for the following character ascensions:\n\n<:Beidou:798579120479928360> Beidou\n<:Fischl:798579031381114890> Fischl\n<:Keqing:798578899956006914> Keqing\n<:Lisa:798578725716361267> Lisa\n<:Razor:798578623900024862> Razor",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Vajrada_Amethyst_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074813",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Vajrada_Amethyst_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074813",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Vajrada Amethyst Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Electro:798483560205385799> Electro",
        "",
        "**Description:**\nThis body is the noblest and most eminent of all in this world.\nIt should hold absolute control over this world",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.60+ Electro Hypostasis\n🔹 **Crafting:** 3x Vajrada Amethyst Fragment, 900 Mora\n🔹 **Crafting:** 1x Chunk, 9x Dust of Azoth",
        "",
        "Vajrada Amethyst Chunk is used for the following character ascensions:\n\n<:Beidou:798579120479928360> Beidou\n<:Fischl:798579031381114890> Fischl\n<:Keqing:798578899956006914> Keqing\n<:Lisa:798578725716361267> Lisa\n<:Razor:798578623900024862> Razor",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Vajrada_Amethyst_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074817",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Vajrada_Amethyst_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074817",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Vajrada Amethyst Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Electro:798483560205385799> Electro",
        "",
        "**Description:**\nThis body is the noblest and most eminent of all in this world.\nIt should hold absolute control over this world\nIt once promised its people a dream: the never-changing 'eternity.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.75+ Electro Hypostasis\n🔹 **Crafting:** 3x Vajrada Amethyst Chunk, 2.700 Mora\n🔹 **Crafting:** 1x Gemstone, 27x Dust of Azoth",
        "",
        "Vajrada Amethyst Gemstone is used for the following character ascensions:\n\n<:Beidou:798579120479928360> Beidou\n<:Fischl:798579031381114890> Fischl\n<:Keqing:798578899956006914> Keqing\n<:Lisa:798578725716361267> Lisa\n<:Razor:798578623900024862> Razor",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Vajrada_Amethyst_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074821",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Vajrada_Amethyst_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074821",
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