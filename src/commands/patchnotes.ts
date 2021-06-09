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
          `**v1.1 A New Star Approaches**`,
          "<https://genshin.mihoyo.com/en/news/detail/6526>",
          "",
          `**v1.2 The Chalk Prince and the Dragon**`,
          "<https://genshin.mihoyo.com/en/news/detail/7567>",
          "",
          `**v1.3 All That Glitters**`,
          "<https://genshin.mihoyo.com/en/news/detail/8498>",
          "",
          `**v1.4 Invitation of Windblume**`,
          "<https://genshin.mihoyo.com/en/news/detail/9368>",
          "",
          `**v1.5 Beneath the Light of Jadeite**`,
          "<https://genshin.mihoyo.com/en/news/detail/12241>",
          "",
          `**v1.6 Midsummer Island Adventure**`,
          "<https://www.hoyolab.com/genshin/article/415463>",
          "",
        ]),
    }).catch(console.log);
  },
});
