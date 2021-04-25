import { parsePrefix } from "../monitors/commandHandler.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand } from "../utils/helpers.ts";

createCommand({
  name: "patchnotes",
  aliases: ["patchnote", "update", "version"],
  guildOnly: true,
  execute: async function (message) {
    const prefix = parsePrefix(message.guildID);
    await message.reply({
      embed: new Embed()
        .setDescription([
          `\`${prefix}update 1.1\``,
          "A New Star Approaches",
          "<https://genshin.mihoyo.com/en/news/detail/6526>",
          "",
          `\`${prefix}update 1.2\``,
          "'The Chalk Prince and the Dragon",
          "<https://genshin.mihoyo.com/en/news/detail/7567>",
          "",
          `\`${prefix}update 1.3\``,
          "'All That Glitters'",
          "<https://genshin.mihoyo.com/en/news/detail/8498>",
          "",
          `\`${prefix}update 1.4\``,
          "Invitation of Windblume",
          "<https://genshin.mihoyo.com/en/news/detail/9368>",
          "",
          `\`${prefix}update 1.5\``,
          "Beneath the Light of Jadeite",
          "<https://genshin.mihoyo.com/en/news/detail/12241>",
          "",
        ]),
    }).catch(console.log);
  },
});
