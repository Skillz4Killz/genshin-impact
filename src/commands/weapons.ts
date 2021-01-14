import { botCache } from "../../cache.ts";
import { weapons } from "../constants/weapons.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "weapon",
  arguments: [{ name: "name", type: "string" }],
  guildOnly: true,
  execute: async function (message, args) {
    const weapon = weapons.get(args.name);
    if (!weapon) {
      return message.reply(
        [
          "Invalid weapon name provided. Valid names are:",
          "",
          [...weapons.keys()].join(" - "),
        ].join("\n"),
      );
    }

    const embed = new Embed()
      .setTitle(weapon.name)
      .setDescription([
        weapon.stars,
        `**Category:** ${weapon.category}`,
        `**Description:** ${weapon.description}`,
        "",
        "",
        `**Base Attack:** ${weapon.baseAttack}`,
        `**Secondary Stat:** ${weapon.secondaryStat}`,
        `**Secondary Stat Value:** ${weapon.secondaryStatValue}`,
        `**Passive Ability Name:** ${weapon.specialAbility}`,
        "",
        `**Refinement:** ${weapon.refinement}`
      ])
      .setThumbnail(weapon.thumbnail)
      .setColor(weapon.color);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

weapons.forEach((c, key) =>
  createCommand({
    name: key,
    guildOnly: true,
    execute: async function (message, args, guild) {
      return botCache.commands.get("weapon")?.execute?.(
        message,
        { name: key },
        guild,
      );
    },
  })
);
