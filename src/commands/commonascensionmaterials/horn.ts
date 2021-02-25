import { Embed } from "../../utils/Embed.ts";
import { createSubcommand } from "../../utils/helpers.ts";
import { createPagination } from "../../utils/pagination.ts";

createSubcommand("material", {
  name: "horn",
  aliases: ["heavyhorn", "blackbronzehorn", "blackcrystalhorn"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Horn")
      .setDescription([
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Mitachurls\n🔹 Crafting",
        "",
        "**Horn** is used for the following weapon ascensions:"
      ])
      .addField("⭐⭐⭐", "Cool Steel\nFerrous Shadow\nMagic Guide\nRaven Bow", true)
      .addField("⭐⭐⭐⭐", "Favonius Codex\nFavonius Sword\nFestering Desire\nRoyal Grimoire\nRoyal Longsword\nSnow-Tombed Starsilver\nThe Bell\nThe Stringless\nThe Viridescent Hunt", true)
      .addField("⭐⭐⭐⭐⭐", "Aquila Favonia", true)
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/42/Item_Black_Bronze_Horn.png/revision/latest/scale-to-width-down/256?cb=20210109220825")
      .setFooter("Page 1/4")
      .setTimestamp()
      .setColor("RANDOM");

    const secondEmbed = new Embed()
    .setTitle("Heavy Horn")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Common Ascension Material",
        "",
        "**Source:**",
        "🔹 Dropped by Mitachurls",
        "",
        "**Description:**",
        "A crude horn used by hilichurls to warn each other. Given the damage to the horn, it won't be warning anyone any time soon."
      ])
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/c/c0/Item_Heavy_Horn.png/revision/latest/scale-to-width-down/256?cb=20210109220828")
      .setFooter("Page 2/4")
      .setTimestamp()
      .setColor("RANDOM");
      

    const thirdEmbed = new Embed()
    .setTitle("Black Bronze Horn")
    .setDescription([
      "**Rarity:** ⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 40+ Mitachurls\n🔹 Crafting: 3x Heavy Horn, 50 Mora",
      "",
      "**Description:**",
      "A metallic monster horn that can only be obtained from especially strong hilichurls, since blowing on the horn takes real strength."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/4/42/Item_Black_Bronze_Horn.png/revision/latest/scale-to-width-down/256?cb=20210109220825")
    .setFooter("Page 3/4")
    .setTimestamp()
    .setColor("RANDOM");

    const fourthEmbed = new Embed()
    .setTitle("Black Crystal Horn")
    .setDescription([
      "**Rarity:** ⭐⭐⭐⭐",
      "",
      "**Item type:** Common Ascension Material",
      "",
      "**Source:**",
      "🔹 Dropped by Lv. 60+ Mitachurls\n🔹 Crafting: 3x Black Bronze Horn, 125 Mora",
      "",
      "**Description:**",
      "A metallic horn with an ominous shine decorated with black crystals of an unknown source. It has hardly been used at all. It is likely a ceremonial item of the hilichurls'."
    ])
    .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/6/64/Item_Black_Crystal_Horn.png/revision/latest/scale-to-width-down/256?cb=20210109220822")
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