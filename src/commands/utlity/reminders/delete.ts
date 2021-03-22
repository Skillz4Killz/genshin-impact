import { createSubcommand } from "../../../utils/helpers.ts";
import { db } from "../../../database/database.ts";

createSubcommand("remind", {
  name: "delete",
  guildOnly: true,
  arguments: [{ name: "id", type: "snowflake" }],
  execute: async (message, args) => {
    const reminder = await db.reminders.get(args.id);
    if (reminder?.memberID !== message.author.id) {
      return message.reply("❌ remind delete error line 16");
    }

    await db.reminders.delete(args.id);
    return message.reply("✅ Reminder successfully deleted!");
  },
});
