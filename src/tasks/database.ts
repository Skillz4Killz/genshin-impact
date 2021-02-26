import { botCache, cache, getChannel } from "../../deps.ts";
import { db } from "../database/database.ts";

botCache.tasks.set("database", {
  name: "database",
  interval: botCache.constants.milliseconds.WEEK,
  execute: async function () {
    const now = Date.now();

    // BLACKLISTED TABLE SHOULD NOT BE CLEANED
    // CLIENT TABLE SHOULD NOT BE CLEANED

    // COMMANDS PERMISSIONS TABLE
    const commandPermissions = await db.commands.getAll();
    commandPermissions.forEach(async (perm) => {
      // CHECK IF THE ROLE IDS OR CHANNEL IDS ARE NO LONGER VALID
      const guild = cache.guilds.get(perm.guildID);
      // THE GUILD WAS NOT DISPATCHED AND DOES NOT EXIST ANYMORE SO DELETE
      if (!guild) return db.commands.delete(perm.id);

      // ONLY KEEP VALID ROLES
      const roleIDs = perm.exceptionRoleIDs.filter((id) => guild.roles.has(id));
      // ONLY KEEP VALID CHANNELS
      const channelIDs = perm.exceptionChannelIDs.filter((id) => cache.channels.has(id));

      // REMOVE INVALID IF NECESSARY
      if (roleIDs.length !== perm.exceptionRoleIDs.length || channelIDs.length !== perm.exceptionChannelIDs.length) {
        await db.commands.update(perm.id, {
          ...perm,
          exceptionChannelIDs: channelIDs,
          exceptionRoleIDs: roleIDs,
        });
      }
    });
  },
});
