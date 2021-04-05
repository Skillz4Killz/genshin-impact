import { botCache, cache, fetchMembers } from "../../deps.ts";

botCache.helpers.fetchMember = async function (guildID, id) {
  // Dumb ts shit on array destructuring https://github.com/microsoft/TypeScript/issues/13778
  if (!id) return;

  const userID = id.startsWith("<@")
    ? id.substring(id.startsWith("<@!") ? 3 : 2, id.length - 1)
    : id;

  const guild = cache.guilds.get(guildID);
  if (!guild) return;

  const cachedMember = cache.members.get(userID);
  if (cachedMember) return cachedMember;

  // When gateway is dying
  // return getMember(guildID, id);

  // Fetch from gateway as it is much better than wasting limited HTTP calls.
  const member = await fetchMembers(guild, { userIDs: [userID] }).catch(() =>
    undefined
  );
  return member?.first();
};
