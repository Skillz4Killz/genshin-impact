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
      .setTitle("Rarity ⭐⭐")
      .setDescription([
        "1",
      ])

    const secondEmbed = new Embed()
      .setTitle("Rarity ⭐⭐⭐")
      .setDescription([
        "2",
      ])

      const thirdEmbed = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐")
      .setDescription([
        "3",
      ])

      const fourthEmbed = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐⭐")
      .setDescription([
        "4",
      ])

      createPagination(message, [firstEmbed,secondEmbed,thirdEmbed,fourthEmbed])
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