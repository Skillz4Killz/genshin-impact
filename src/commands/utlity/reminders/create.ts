import { db } from "../../../database/database.ts";
import { createSubcommand } from "../../../utils/helpers.ts";

createSubcommand("remind", {
  name: "create",
  guildOnly: true,
  arguments: [
    { name: "start", type: "duration" },
    { name: "interval", type: "duration", required: false },
    { name: "content", type: "...string" },
  ],
  execute: async (message, args) => {
    await db.reminders.create(message.id, {
      id: message.id,
      reminderID: message.id,
      guildID: message.guildID,
      channelID: message.channelID,
      memberID: message.author.id,
      recurring: true,
      content: args.content,
      timestamp: message.timestamp + args.start,
      interval: args.interval,
    });

    return message.reply("✅ Reminder successfully created!");
  },
});
