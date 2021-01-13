import { botCache } from "../../cache.ts";
import { artifacts } from "../constants/artifacts.ts";
import { Embed } from "../utils/Embed.ts";
import { createCommand, sendEmbed } from "../utils/helpers.ts";

createCommand({
  name: "artifact",
  arguments: [{ name: "name", type: "string" }],
  guildOnly: true,
  execute: async function (message, args) {
    const artifact = artifacts.get(args.name);
    if (!artifact) {
      return message.reply(
        [
          "Invalid artifact name provided. Valid names are:",
          "",
          [...artifacts.keys()].join(" "),
        ].join("\n"),
      );
    }

    const embed = new Embed()
      .setTitle(artifact.name)
      .setDescription([
        artifact.stars,
        `**2 Piece Bonus:** ${artifact.twoPieceBonus}`,
        `**4 Piece Bonus:** ${artifact.fourPieceBonus}`,
        "",
        `**Drops in:** ${artifact.dropsIn}`,
      ])
      .setThumbnail(artifact.thumbnail)
      .setImage(artifact.image)
      .setColor(artifact.color);

    await sendEmbed(message.channelID, embed).catch(console.log);
  },
});

artifacts.forEach((c, key) =>
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
