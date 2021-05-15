import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "freedom",
  aliases: ["teachingsoffreedom", "guidetofreedom", "philosophiesoffreedom"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Freedom")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Freedom is used to level talents for the following characters:",
        ":Amber:798579318262988810> Amber\n<:barbara:843214508830883860> Barbara\n<:diona:843214992958423071> Diona\n<:klee:843214509393182731> Klee\n<:sucrose:843214509534347285> Sucrose\n<:tartaglia:843214509760839710> Tartaglia\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Monday/Thursday/Sunday)*",
        "",
        "**Description:**",
        "Freedom is the spirit of the Land of the Wind.\nThe freedom to live is one of such. It is the freedom to live freely and healthily without concerns of one's own safety.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Teachings_of_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071838",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Teachings_of_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071838",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM")
      .setTimestamp();

    const secondEmbed = new Embed()
      .setTitle("Guide to Freedom")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Freedom is used to level talents for the following characters:",
        ":Amber:798579318262988810> Amber\n<:barbara:843214508830883860> Barbara\n<:diona:843214992958423071> Diona\n<:klee:843214509393182731> Klee\n<:sucrose:843214509534347285> Sucrose\n<:tartaglia:843214509760839710> Tartaglia\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Monday/Thursday/Sunday)*\n🔹 **Crafting:** 3x Teachings of Freedom, 175 Mora",
        "",
        "**Description:**",
        "Freedom is the spirit of the Land of the Wind.\nThe freedom of travel is one of such. It is the freedom to traverse the land freely without being obstructed.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Item_Guide_to_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071929",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Item_Guide_to_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071929",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM")
      .setTimestamp();

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Freedom")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Freedom is used to level talents for the following characters:",
        ":Amber:798579318262988810> Amber\n<:barbara:843214508830883860> Barbara\n<:diona:843214992958423071> Diona\n<:klee:843214509393182731> Klee\n<:sucrose:843214509534347285> Sucrose\n<:tartaglia:843214509760839710> Tartaglia\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Monday/Thursday/Sunday)*\n🔹 **Crafting:** 3x Guide to Freedom, 550 Mora",
        "",
        "**Description:**",
        "Freedom is the spirit of the city of wind.\nTo sing is one such freedom. To sing on the land created by the Anemo Archon is to send your heart away with the song on the wind.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Philosophies_of_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071940",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Philosophies_of_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071940",
      )
      .setFooter("Page 3/3")
      .setColor("RANDOM")
      .setTimestamp();

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed]);
  },
});
