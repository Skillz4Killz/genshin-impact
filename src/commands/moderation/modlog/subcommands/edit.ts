import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("modlog", {
  name: "edit",
  aliases: ["change", "update"],
  userServerPermissions: ["MANAGE_GUILD"],
  arguments: [
    { name: "id", type: "number", required: true },
    { name: "reason", type: "...string", required: true },
  ],
  guildOnly: true,
  execute: async (message, args) => {
    await db.modlogs.updateOne(
      { guildID: message.guildID, modlogID: args.id },
      { reason: args.reason },
    );

    return message.reply(
      "Successfully edited the modlog entry!",
    );
  },
});
