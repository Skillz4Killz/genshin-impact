import { db } from "../../../../database/database.ts";
import { createSubcommand } from "../../../../utils/helpers.ts";

createSubcommand("modlog", {
  name: "remove",
  aliases: ["delete"],
  userServerPermissions: ["MANAGE_GUILD"],
  arguments: [{ name: "id", type: "number", required: true }],
  guildOnly: true,
  execute: async (message, args) => {
    await db.modlogs.deleteOne({ guildID: message.guildID, modlogID: args.id });
    return message.reply("Successfully removed the modlog entry!");
  },
});
