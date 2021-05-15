import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "gold",
  aliases: ["teachingsofgold", "guidetogold", "philosophiesofgold"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Gold")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Gold is used to level talents for the following characters:",
        "<:beidou:843214508793266297> Beidou\n<:xingqiu:843214509489127445> Xingqiu\n<:xinyan:843214509609844796> Xinyan\n<:zhongli:843214509605650442> Zhongli",
        "",
        "**Source:**",
        "🔹 Taishan Mansion *(Wednesday/Saturday/Sunday)*",
        "",
        "**Description:**",
        "Gold is the symbol of the Land of the Earth.\nGold is the blood flowing deep under the land of Liyue, is the muscles that pump Liyue's heart, and the bones that make Liyue stand proud.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072309",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072309",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM")
      .setTimestamp();

    const secondEmbed = new Embed()
      .setTitle("Guide to Gold")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Gold is used to level talents for the following characters:",
        "<:beidou:843214508793266297> Beidou\n<:xingqiu:843214509489127445> Xingqiu\n<:xinyan:843214509609844796> Xinyan\n<:zhongli:843214509605650442> Zhongli\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Taishan Mansion *(Wednesday/Saturday/Sunday)*\n🔹 **Crafting:** 3x Teachings of Gold, 175 Mora",
        "",
        "**Description:**",
        "Gold is the symbol of the Land of the Earth.\nGold symbolizes conversion. This is the unspoken understanding between Liyue's mountains, land, city, and its people. In Liyue, industriousness is converted to gold, and gold to prosperity.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072319",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072319",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM")
      .setTimestamp();

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Gold")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Gold is used to level talents for the following characters:",
        "<:beidou:843214508793266297> Beidou\n<:xingqiu:843214509489127445> Xingqiu\n<:xinyan:843214509609844796> Xinyan\n<:zhongli:843214509605650442> Zhongli\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Taishan Mansion *(Wednesday/Saturday/Sunday)*\n🔹 **Crafting:** 3x Guide to Gold, 550 Mora",
        "",
        "**Description:**",
        "Gold is the symbol of the Land of the Earth.\nGold is the wealth of Liyue, but Liyue's true wealth is the hearts of its people that shine like gold.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106064435",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106064435",
      )
      .setFooter("Page 3/3")
      .setColor("RANDOM")
      .setTimestamp();

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed]);
  },
});
