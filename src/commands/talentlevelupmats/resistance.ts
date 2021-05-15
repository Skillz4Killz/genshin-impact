import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "resistance",
  aliases: [
    "teachingsofresistance",
    "guidetoresistance",
    "philosophiesofresistance",
  ],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Resistance")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Resistance is used to level talents for the following characters:",
        "<:bennett:843214508952125470> Bennett\n<:diluc:843214508956713000> Diluc\n<:jean:843214509283868724> Jean\n<:mona:843214509610500106> Mona\n<:noelle:843214509380599850> Noelle\n<:razor:843215534711242813> Razor",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Tuesday/Friday/Sunday)*",
        "",
        "**Description:**",
        "Resistance is the backbone of the Land of the Wind.\nThe history of Mondstadt is one of resistances. People rose up to prevent past conflicts from ever being forgotten, like sprouts breaking through the soil, like the eternal wind eroding through stone walls.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072033",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072033",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM")
      .setTimestamp();

    const secondEmbed = new Embed()
      .setTitle("Guide to Resistance")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Resistance is used to level talents for the following characters:",
        "<:bennett:843214508952125470> Bennett\n<:diluc:843214508956713000> Diluc\n<:jean:843214509283868724> Jean\n<:mona:843214509610500106> Mona\n<:noelle:843214509380599850> Noelle\n<:razor:843215534711242813> Razor\<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Tuesday/Friday/Sunday)*\n🔹 **Crafting:** 3x Teachings of Resistance, 175 Mora",
        "",
        "**Description:**",
        "Resistance is the backbone of the city of Wind.\nThe history of Mondstadt is one of resistances. People rose up to grant the citizens of Mondstadt the freedom they now enjoy, like the Anemo Archon blowing away the snow, or like Vennessa rising up to fight.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072046",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072046",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM")
      .setTimestamp();

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Resistance")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Resistance is used to level talents for the following characters:",
        "<:bennett:843214508952125470> Bennett\n<:diluc:843214508956713000> Diluc\n<:jean:843214509283868724> Jean\n<:mona:843214509610500106> Mona\n<:noelle:843214509380599850> Noelle\n<:razor:843215534711242813> Razor\n<:traveler:843214509597392926> Travelers",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Tuesday/Friday/Sunday)*\n🔹 **Crafting:** 3x Guide to Resistance, 550 Mora",
        "",
        "**Description:**",
        "Resistance is the backbone of the Land of the Wind.\nThe history of Mondstadt is one of resistances. People rose up to allow the future Mondstadt's poetry to freely be that of the wind and be spread across the land.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072058",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png/revision/latest/scale-to-width-down/256?cb=20210106072058",
      )
      .setFooter("Page 3/3")
      .setColor("RANDOM")
      .setTimestamp();

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed]);
  },
});
