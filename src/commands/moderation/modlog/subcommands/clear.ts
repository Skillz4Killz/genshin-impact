import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("modlog", {
  name: "clear",
  userServerPermissions: ["MANAGE_GUILD"],
  arguments: [{ name: "member", type: "member" }],
  guildOnly: true,
  execute: async (message, args) => {
    await db.modlogs.deleteMany({
      guildID: message.guildID,
      userID: args.member.id,
    });

    return message.reply(
      "Successfully removed all modlog entries of this user!",
    );
  },
});
