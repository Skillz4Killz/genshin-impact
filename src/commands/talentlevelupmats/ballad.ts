import { createPagination } from "../../utils/pagination.ts";
import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "ballad",
  aliases: ["teachingsofballad", "guidetoballad", "philosophiesofballad"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Teachings of Ballad")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Teachings of Ballad is used to level talents for the following characters:",
        "<:albedo:843214508462047353> Albedo\n<:fischl:843214510005551105> Fischl\n<:kaeya:843214509606567936> Kaeya\n<:lisa:843214509706444840> Lisa\n<:venti:843214509615480842> Venti",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Wednesday/Saturday/Sunday)*",
        "",
        "**Description:**",
        "Poetry is the soul of the Land of the Wind.\nPoetry is the manifestations of beautiful feelings. On a beautiful day, the breezes carry with them poetry that touches the heart of people like the wind caressing the leaves.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065412",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065412",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM")
      .setTimestamp();

    const secondEmbed = new Embed()
      .setTitle("Guide to Ballad")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Guide to Ballad is used to level talents for the following characters:",
        "<:albedo:843214508462047353> Albedo\n<:fischl:843214510005551105> Fischl\n<:kaeya:843214509606567936> Kaeya\n<:lisa:843214509706444840> Lisa\n<:venti:843214509615480842> Venti\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Wednesday/Saturday/Sunday)*\n🔹 **Crafting:** 3x Teachings of Ballad, 175 Mora",
        "",
        "**Description:**",
        "Poetry is the soul of the Land of the Wind.\nPoetry is the manifestations of the will to encourage. In the dark days, the gales in the streets and alleyways whisper words of fury, like the battle drums, like the low rumbling before the storm.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065423",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065423",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM")
      .setTimestamp();

    const thirdEmbed = new Embed()
      .setTitle("Philosophies of Ballad")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Philosophies of Ballad is used to level talents for the following characters:",
        "<:albedo:843214508462047353> Albedo\n<:fischl:843214510005551105> Fischl\n<:kaeya:843214509606567936> Kaeya\n<:lisa:843214509706444840> Lisa\n<:venti:843214509615480842> Venti\n<:traveler:843214509597392926> Traveler",
        "",
        "**Source:**",
        "🔹 Forsaken Rift *(Wednesday/Saturday/Sunday)*\n🔹 **Crafting:** 3x Guide to Ballad, 550 Mora",
        "",
        "**Description:**",
        "Poetry is the soul of the Land of the Wind.\nPoetry is the manifestations of the desire to spread the word. Though nothing is eternal, though nothing will be the same, the wind's poetry will still spread beyond the skies, the land, the seas, to every corner of the world.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065347",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065347",
      )
      .setFooter("Page 3/3")
      .setColor("RANDOM")
      .setTimestamp();

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed]);
  },
});
