import { addReactions, Message, removeUserReaction } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createCommand, editEmbed, sendEmbed } from "../../utils/helpers.ts";

createCommand({
  name: "brilliantdiamond",
  aliases: ["bd"],
  arguments: [
    { name: "page", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message) {

      const firstEmbed = new Embed()
      .setTitle("Brilliant Diamond")
      .setDescription([
        "Brilliant Diamonds are gemstones of varying quality used in the ascension of characters.\n\nBrilliant Diamonds are used exclusively by the Traveler.\n\nCan be obtained at the Adventure Guild for leveling up.",
      ])

    const secondEmbed = new Embed()
      .setTitle("Brilliant Diamond Sliver")
      .setDescription([
        "**Rarity:** ⭐⭐",
        "",
        "**Item type:** Character Ascension Material",
        "**Description:** Welcome to this world.",
        "",
        "**Source:** 1.) Adventure Rank 15 Reward (x1)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\nTraveler\n\n\nNone of the released weapons use Brilliant Diamond Sliver for ascensions.",
      ])
      .setImage("https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106075046")
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png/revision/latest/scale-to-width-down/256?cb=20210106075046")

      const thirdEmbed = new Embed()
      .setTitle("Brilliant Diamond Fragment")
      .setDescription([
        "**Rarity:** ⭐⭐⭐",
        "",
        "**Item type:** Character Ascension Material",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n1.) Adventure Rank 25 Reward (3x)\nAdventure Rank 26 Reward (2x)\nAdventure Rank 28 Reward (2x)\nAdventure Rank 30 Reward (2x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\nTraveler\n\n\nNone of the released weapons use Brilliant Diamond Sliver for ascensions.",
      ])
      .setImage("https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074737")
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png/revision/latest/scale-to-width-down/256?cb=20210106074737")

      const fourthEmbed = new Embed()
      .setTitle("Brilliant Diamond Chunk")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐",
        "**Item type:** Character Ascension Material",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n1.) Adventure Rank 35 Reward (3x)\nAdventure Rank 38 Reward (3x)\nAdventure Rank 40 Reward (3x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\nTraveler\n\n\nNone of the released weapons use Brilliant Diamond Sliver for ascensions.",
      ])
      .setImage("https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106075044")
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png/revision/latest/scale-to-width-down/256?cb=20210106075044")

      const fifthEmbed = new Embed()
      .setTitle("Brilliant Diamond Gemstone")
      .setDescription([
        "**Rarity:** ⭐⭐⭐⭐⭐",
        "**Item type:** Character Ascension Material",
        "**Description:** Welcome to this world.",
        "",
        "**Source:**\n1.) Adventure Rank 41 Reward (2x)\nAdventure Rank 42 Reward (2x)\nAdventure Rank 28 Reward (2x)\nAdventure Rank 45 Reward (2x)",
        "",
        "Brilliant Diamond Sliver is used for the following character ascensions:\n\nTraveler\n\n\nNone of the released weapons use Brilliant Diamond Sliver for ascensions.",
      ])
      .setImage("https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074742")
      .setThumbnail("https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png/revision/latest/scale-to-width-down/256?cb=20210106074742")

      createPagination(message, [firstEmbed,secondEmbed,thirdEmbed,fourthEmbed,fifthEmbed])
},
});

export async function createPagination(message: Message, embeds: Embed[], page = 1 ): Promise<void> {
    if (embeds.length === 0)
        return;

    const {channelID, author} = message;

    let currentPage: number = page - 1;

    let embedMessage = await sendEmbed(channelID, embeds[currentPage]);

    if (!embedMessage)
        return;

    if (embeds.length <= 1)
        return;

    try {
        addReactions(
            embedMessage.channelID,
            embedMessage.id,
            ['⏮️','◀️','▶️','⏭️'],
            true
        )
    } catch (e) {
        console.error(e);
        return;
    }

    while(true) {
        if (!embedMessage)
            return;
        const reaction = await needReaction(author.id, embedMessage.id);

        if (!reaction)
            return;

        if(!(removeUserReaction(message.channelID, embedMessage.id, reaction, message.author.id).catch(console.error)))
            return;

        if (reaction === '◀️') {
            currentPage--;
        } else if (reaction === '▶️') {
            currentPage++;
        } else if (reaction === '⏮️') {
            currentPage = 0;
        } else if (reaction === '⏭️') {
            currentPage = embeds.length - 1;
        } else {
            continue;
        }

        if (currentPage < 0)
            currentPage = 0;

        if (currentPage > embeds.length - 1)
            currentPage = embeds.length - 1;

        if (!embedMessage)
            return;

        if(!(await editEmbed(embedMessage, embeds[currentPage]).catch(console.error)))
            return;
    }
}