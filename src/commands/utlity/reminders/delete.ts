import { createSubcommand } from "../../../utils/helpers.ts";
import { db } from "../../../database/database.ts";

createSubcommand("remind", {
  name: "delete",
  guildOnly: true,
  arguments: [{ name: "id", type: "snowflake" }],
  execute: async (message, args) => {
    const reminder = await db.reminders.get(args.id);
    if (reminder?.memberID !== message.author.id) {
      return message.reply("❌ Reminder does not exist or is not one of yours.");
    }

    await db.reminders.delete(args.id);
    return message.reply("✅ Reminder successfully deleted!");
  },
});
