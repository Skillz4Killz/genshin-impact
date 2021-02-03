import { Milliseconds } from "../utils/constants/time.ts";
import { botCache, botID, cache, cacheHandlers } from "../../deps.ts";

const MEMBER_LIFETIME = Milliseconds.MINUTE * 30;
const MESSAGE_LIFETIME = Milliseconds.MINUTE * 10;

botCache.tasks.set("sweeper", {
  name: "sweeper",
  interval: Milliseconds.MINUTE * 5,
  execute: async function () {
    const now = Date.now();
    // Delete presences from the bots cache.
    cache.members.forEach(async function (member) {
      // Don't sweep the bot
      if (member.id === botID) return;
      // Delete any member who has not been active in the last 30 minutes and is not currently in a voice channel
      const lastActive = botCache.memberLastActive.get(member.id);
      // If the user is active recently
      if (lastActive && now - lastActive < MEMBER_LIFETIME) return;

      cache.members.delete(member.id);
      botCache.memberLastActive.delete(member.id);
    });

    // For every message we will delete if necessary
    cache.messages.forEach(async function (message) {
      // DM messages aren't needed
      if (!message.guildID) return cache.messages.delete(message.id);

      if (
        botCache.messageCollectors.has(message.id) ||
        botCache.reactionCollectors.has(message.id)
      ) {
        return;
      }

      if (now - message.timestamp > MESSAGE_LIFETIME) {
        cache.messages.delete(message.id);
      }
    });
  },
});

botCache.tasks.set("sweeper_guilds", {
  name: "sweeper_guilds",
  interval: Milliseconds.HOUR,
  execute: async function () {
    cache.guilds.forEach(async function (guild) {
      if (botCache.activeGuildIDs.has(guild.id)) return;

      // This is an inactive guild. Not a single thing has happened for atleast 60 minutes.
      cache.guilds.delete(guild.id);
      botCache.dispatchedGuildIDs.add(guild.id);
    });

    cache.channels.forEach(async function (channel) {
      if (!botCache.dispatchedGuildIDs.has(channel.guildID)) return;

      cache.channels.delete(channel.id);
      botCache.dispatchedChannelIDs.add(channel.id);
    });

    // Reset activity for next interval
    botCache.activeGuildIDs.clear();
  },
});
