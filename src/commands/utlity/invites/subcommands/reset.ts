import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("invites", {
  name: "reset",
  aliases: ["clear"],
  userServerPermissions: ["MANAGE_GUILD"],
  botServerPermissions: ["MANAGE_GUILD"],
  guildOnly: true,
  execute: async (message) => {
    await db.guilds.update(message.guildID, {
      invitetracking: false,
      invitedUserIDs: [],
    });
    await db.serverinvites.deleteMany({
      guildID: message.guildID,
    });

    return message.reply(
      "✅ Successfully removed all invite logs from this server and stopped invite tracking!",
    );
  },
});
