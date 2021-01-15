import { botCache } from "../../cache.ts";
import { foods } from "../constants/foods.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "food",
  arguments: [{ name: "name", type: "string" }],
  guildOnly: true,
  execute: async function (message, args) {
    const food = foods.get(args.name);
    if (!food) {
      return message.reply(
        [
          "Paimon can't find your food... Try one of these:",
          "",
          [...foods.keys()].join(" - "),
        ].join("\n"),
      );
    }

    const embed = new Embed()
      .setTitle(food.name)
      .setDescription([
        `**Rarity:** ${food.stars}`,
        `**Dish Type:** ${food.dishType}`,
        `**Proficiency:** ${food.proficiency}`,
        `**How to get::**\n${food.obtainable}`,
        "",
        `**Recipe:**${food.recipe}`,
        "",
        `**Recipe:**${food.description}`,
        "",
        `**Effect** (depending on quality):*n${food.effect}`,
      ])
      .setThumbnail(food.image)
      .setColor(food.color);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

foods.forEach((c, key) =>
  createCommand({
    name: key,
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands.get("food")?.execute?.(
        message,
        { name: key },
        guild,
      );
    },
  })
);
