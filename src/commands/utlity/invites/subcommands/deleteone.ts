import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("invites", {
  name: "delete",
  aliases: ["remove"],
  userServerPermissions: ["MANAGE_GUILD"],
  botServerPermissions: ["MANAGE_GUILD"],
  arguments: [
    { name: "code", type: "string" },
  ],
  guildOnly: true,
  execute: async (message, args) => {
    await db.serverinvites.delete(`${args.code}_${message.guildID}`);

    return message.reply(
      "✅ Successfully deleted the invite from the DB!",
    );
  },
});
