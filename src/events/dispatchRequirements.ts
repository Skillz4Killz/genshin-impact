import {
  botCache,
  botID,
  cache,
  getChannels,
  getGuild,
  getMember,
  structures,
  UpdateGuildPayload,
} from "../../deps.ts";

botCache.eventHandlers.dispatchRequirements = async function (data, shardID) {
  if (!botCache.fullyReady) return;

  // Delete means we dont need to fetch. Create should have data to cache
  if (data.t && ["GUILD_CREATE", "GUILD_DELETE"].includes(data.t)) return;

  const id = data.t && data.t === "GUILD_UPDATE"
    ? (data.d as any)?.id
    : (data.d as any)?.guild_id;

  if (!id || botCache.activeGuildIDs.has(id)) return;

  // If this guild is in cache, it has not been swept and we can cancel
  if (cache.guilds.has(id)) {
    botCache.activeGuildIDs.add(id);
    return;
  }

  console.log(`[DISPATCH] New Guild ID has appeared: ${id} in ${data.t} event`);

  const rawGuild = await getGuild(id, true).catch(console.log) as
    | UpdateGuildPayload
    | undefined;

  if (!rawGuild) {
    return console.log(`[DISPATCH] Failed to fetch Guild ID ${id}`);
  }

  const [channels, botMember] = await Promise.all([
    getChannels(id, false),
    getMember(id, botID, { force: true }),
  ]).catch((error) => {
    console.log(error);
    return [];
  });

  if (!botMember || !channels) {
    return console.log(
      `[DISPATCH] Guild ID ${id} Name: ${rawGuild.name} failed. Unable to get botMember or channels`,
    );
  }

  const guildBotMember = botMember.guilds.get(id);

  const guild = await structures.createGuild(
    {
      ...rawGuild,
      joined_at: guildBotMember
        ? new Date(guildBotMember.joinedAt).toISOString()
        : new Date().toISOString(),
      large: false,
      unavailable: false,
      member_count: rawGuild.approximate_member_count,
      voice_states: [],
      members: [],
      channels: [],
      presences: [],
    },
    shardID,
  );

  // Add to cache
  cache.guilds.set(id, guild);
  botCache.dispatchedGuildIDs.delete(id);
  channels.forEach(async function (channel) {
    botCache.dispatchedChannelIDs.delete(channel.id);
    cache.channels.set(channel.id, channel);
  });

  console.log(
    `[DISPATCH] Guild ID ${id} Name: ${guild.name} completely loaded.`,
  );
};
