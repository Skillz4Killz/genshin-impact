import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "vayudaturquoise",
  aliases: ["vt", "vayuda"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Vayuda Turquoise")
      .setDescription([
        "**Vayuda Turquoise** are gemstones of varying quality used in the ascension of characters.\n\n**Vayuda Turquoise** is associated with the Anemo element.\n\nCan be obtained from the Anemo Hypostasis, Souvenir Shop and Alchemy.\n\n**Element:** <:Anemo:798483595781341194> Anemo",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074919",
      )
      .setFooter("Page 1/5")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Brilliant Diamond Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Anemo Hypostasis\n🔹 Purchased from the Souvenir Shop\n🔹 **Crafting:** 1x Sliver, 1x Dust of Azoth",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:jean:843214509283868724> Jean\n<:sucrose:843214509534347285> Sucrose\n<:venti:843214509615480842> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074904",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106074904",
      )
      .setFooter("Page 2/5")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Brilliant Diamond Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Description:**\nStill, the winds change direction.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.40+ Anemo Hypostasis\n🔹 **Crafting:** 3x Vayuda Turquoise Sliver, 300 Mora\n🔹 **Crafting:** 1x Fragment, 3x Dust of Azoth",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:jean:843214509283868724> Jean\n<:sucrose:843214509534347285> Sucrose\n<:venti:843214509615480842> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074908",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074908",
      )
      .setFooter("Page 3/5")
      .setColor("RANDOM");

    const fourthEmbed = new Embed()
      .setTitle("Vayuda Turquoise Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Description:**\nStill, the winds change direction.\nSomeday, they will blow towards a brighter future…\nTake my blessings and live leisurely from this day onward.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv.60+ Anemo Hypostasis\n🔹 **Crafting:** 3x Vayuda Turquoise Fragment, 900 Mora\n🔹 **Crafting:** 1x Chunk, 9x Dust of Azoth",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:jean:843214509283868724> Jean\n<:sucrose:843214509534347285> Sucrose\n<:venti:843214509615480842> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074913",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106074913",
      )
      .setFooter("Page 4/5")
      .setColor("RANDOM");

    const fifthEmbed = new Embed()
      .setTitle("Vayuda Turquoise Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "",
        "**Element:** <:Anemo:798483595781341194> Anemo",
        "",
        "**Description:**\nStill, the winds change direction.\nSomeday, they will blow towards a brighter future…\nTake my blessings and live leisurely from this day onward.",
        "",
        "**Item type:** Character Ascension Material",
        "",
        "**Source:**\n🔹 Dropped by Lv. 75+ Anemo Hypostasis\n🔹 **Crafting:** 3x Vayuda Turquoise Chunk, 2.700 Mora\n🔹 **Crafting:** 1x Gemstone, 27x Dust of Azoth",
        "",
        "Vayuda Turquoise Sliver is used for the following character ascensions:\n\n<:jean:843214509283868724> Jean\n<:sucrose:843214509534347285> Sucrose\n<:venti:843214509615480842> Venti",
      ])
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074919",
      )
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074919",
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
