import { botCache, Message } from "../../../deps.ts";
import { needReaction } from "../../utils/collectors.ts";
import { Embed } from "../../utils/Embed.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "brilliantdiamond",
  aliases: ["bd"],
  arguments: [
    { name: "page", type: "number", defaultValue: 1 },
  ],
  guildOnly: true,
  execute: async function (message, args) {

      const first = new Embed()
      .setTitle("Rarity ⭐⭐")
      .setDescription([
        "",
      ])

    const second = new Embed()
      .setTitle("Rarity ⭐⭐⭐")
      .setDescription([
        "",
      ])

      const third = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐")
      .setDescription([
        "",
      ])

      const fourth = new Embed()
      .setTitle("Rarity ⭐⭐⭐⭐⭐")
      .setDescription([
        "",
      ])


    const pages = {
      1: { page: 1, embed: first, emoji: "1️⃣" },
      2: { page: 2, embed: second, emoji: "2️⃣" },
      3: { page: 3, embed: third, emoji: "3️⃣" },
      4: { page: 4, embed: fourth, emoji: "4️⃣" },
    } as Record<number, { page: number; embed: Embed; emoji: string } | undefined>;

    const page = pages[args.page];
    if (!page) return;

    // SEND FIRST EMBED
    const response = args.msg
      ? await (args.msg as Message).edit({ embed: page.embed }).catch(console.log)
      : await message.reply({ embed: page.embed }).catch(console.log);
    if (!response) return;

    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣"];
    // ADD THE REACTIONS
    if (!args.msg) await response.addReactions(emojis, true).catch(console.log);

    // HANDLE PAGINATION
    const reaction = await needReaction(message.author.id, response.id, {
      filter: (userID, reaction) => message.author.id === userID && page.emoji !== reaction,
    }).catch(console.log);
    if (!reaction) return;

    const selectedPage = Object.values(pages).find((page) => page?.emoji === reaction);
    if (!selectedPage) return;

    return botCache.commands
    .get("brilliantdiamond")
    ?.execute?.(message, { character: args.character, page: selectedPage.page, msg: response });
},
});