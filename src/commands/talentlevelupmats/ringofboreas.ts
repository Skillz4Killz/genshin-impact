import { Embed } from "../../utils/Embed.ts";
import { createSubcommand, sendEmbed } from "../../utils/helpers.ts";

createSubcommand("material", {
  name: "ringofboreas",
  guildOnly: true,
  execute: async function (message, args) {
    const embed = new Embed()
      .setTitle("Ring of Boreas")
      .setDescription([
        `**Rarity:** ⭐⭐⭐⭐⭐`,
        "",
        "**Item type:** Talent Level-Up Material",
        "",
        "Ring of Boreas is used to level talents for the following characters:",
        "<:barbara:843214508830883860> Barbara\n<:klee:843214509393182731> Klee\n<:keqing:843214509719420928> Keqing\n<:mona:843214509610500106> Mona",
        "",
        "**Source:**",
        "🔹 Lv. 70+ Wolf of the North Challenge Reward",
        "",
        "**Description:**",
        "A bit of crystallized ice from the Great Wolf King of the North.\nThis land was once a realm of sub-zero blizzards and ice storms filled with razor-sharp ice shards, all at the command of Boreas. Though its powers may have diminished, flash-freezing the land is still a breeze.",
      ])
      .setThumbnail(
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png/revision/latest/scale-to-width-down/256?cb=20210106070626",
      )
      .setImage(
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png/revision/latest/scale-to-width-down/256?cb=20210106070626",
      )
      .setColor("RANDOM")
      .setTimestamp();

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});
