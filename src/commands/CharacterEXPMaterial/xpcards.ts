import { Embed } from "../../utils/Embed.ts";
import { createPagination } from "../../utils/pagination.ts";
import { createSubcommand } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "wanderersadvice",
  aliases: [
    "adventurersexperience",
    "heroswit",
  ],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {
    const firstEmbed = new Embed()
      .setTitle("Wanderer's Advice")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Character EXP Material",
        "",
        "**Source:**",
        "🔹 Midsummer Courtyard\n🔹 Adventure and Exploration Reward\n🔹 Ley Line Outcrops Blossom of Revelation",
        "",
        "**Description:**",
        "Character EXP material. Gives 1,000 EXP. These experiences are still beneficial even if one does not live in Teyvat.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Wanderer%27s_Advice.png/revision/latest/scale-to-width-down/256?cb=20201116222406",
      )
      .setFooter("Page 1/3")
      .setColor("RANDOM");

    const secondEmbed = new Embed()
      .setTitle("Adventurer's Experience")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Character EXP Material",
        "",
        "**Source:**",
        "🔹 Adventure and Exploration Reward\n🔹 Paimon's Bargains\n🔹 Ley Line Outcrops Blossom of Revelation",
        "",
        "**Description:**",
        "Character EXP material. Gives 5,000 EXP. These experiences are very beneficial for journeys into the unknown.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Adventurer%27s_Experience.png/revision/latest/scale-to-width-down/256?cb=20201116222310",
      )
      .setFooter("Page 2/3")
      .setColor("RANDOM");

    const thirdEmbed = new Embed()
      .setTitle("Hero's Wit")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "",
        "**Item type:** Character EXP Material",
        "",
        "**Source:**",
        "🔹 Random Event Reward\n🔹 Ley Line Outcrops Blossom of Revelation (AR 35+)\n🔹 Quest completion reward",
        "",
        "**Description:**",
        "Character EXP material. Gives 20,000 EXP. These experiences are extremely precious for a pilgrim traveling through Teyvat in order to be closer to Celestia.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Item_Hero%27s_Wit.png/revision/latest/scale-to-width-down/256?cb=20201116222208",
      )
      .setFooter("Page 3/3")
      .setTimestamp()
      .setColor("RANDOM");

    createPagination(message, [firstEmbed, secondEmbed, thirdEmbed]);
  },
});