import { configs } from "../../configs.ts";
import { botCache, sendMessage } from "../../deps.ts";
import { Embed } from "../utils/Embed.ts";

botCache.eventHandlers.guildCreate = async (guild) => {
  console.info(
    `[EVENT=GuildCreate]: ${guild.name} with ${guild.memberCount} members.`,
  );

  const embed = new Embed().setColor("06ac00").setTitle("NEW SERVER ADDED")
    .addField("Name", guild.name, true)
    .addField("ID", guild.id, true)
    .addField(
      "Members",
      botCache.helpers.cleanNumber(guild.memberCount),
      true,
    )
    .addField("Shard ID", `${guild.shardID}`)
    .setThumbnail(guild.iconURL() ?? "")
    .setTimestamp();

  await sendMessage(configs.channelIDs.serverStats, { embed }).catch(
    console.log,
  );


botCache.eventHandlers.guildDelete = async (guild) => {
  console.info(
    `[EVENT=GuildDelete]: ${guild.name} with ${guild.memberCount} members.`,
  );

  const embed = new Embed().setColor("ff0000").setTitle("SERVER REMOVED")
    .addField("Name", guild.name, true)
    .addField("ID", guild.id, true)
    .addField(
      "Members",
      botCache.helpers.cleanNumber(guild.memberCount),
      true,
    )
    .setThumbnail(guild.iconURL() ?? "")
    .setTimestamp();

  await sendMessage(configs.channelIDs.serverStats, { embed }).catch(
    console.log,
  );
};
}