// This task will update the database once a minute with all the latest product analytics
import { botCache, botID } from "../../deps.ts";
import { db } from "../database/database.ts";

botCache.tasks.set(`stats`, {
  name: `stats`,
  // Runs this function once a minute
  interval: botCache.constants.milliseconds.SECOND * 5,
  execute: async function () {
    const stats = await db.clientstats.get(botID);
    if (!stats) {
      await db.clientstats.create(botID, {
        id: botID,
        botID,
        messagesProcessed: "0",
        messagesDeleted: "0",
        messagesUpdated: "0",
        messagesSent: "0",
        reactionsAddedProcessed: "0",
        reactionsRemovedProcessed: "0",
        commandsRan: "0",
      });
      return console.log(
        "Botstats task was unable to run because no stats was found in DB.",
      );
    }

    // Clone the current stats
    const currentBotStats = { ...botCache.stats };

    // Reset current stats
    botCache.stats.messagesDeleted = 0;
    botCache.stats.messagesUpdated = 0;
    botCache.stats.messagesProcessed = 0;
    botCache.stats.messagesSent = 0;
    botCache.stats.reactionsAddedProcessed = 0;
    botCache.stats.reactionsRemovedProcessed = 0;
    botCache.stats.commandsRan = 0;

    // Update the stats in the database.
    await db.clientstats.update(botID, {
      ...stats,
      messagesDeleted: String(
        BigInt(stats.messagesDeleted || "0") +
          BigInt(currentBotStats.messagesDeleted),
      ),
      messagesUpdated: String(
        BigInt(stats.messagesUpdated || "0") +
          BigInt(currentBotStats.messagesUpdated),
      ),
      messagesProcessed: String(
        BigInt(stats.messagesProcessed || "0") +
          BigInt(currentBotStats.messagesProcessed),
      ),
      messagesSent: String(
        BigInt(stats.messagesSent || "0") +
          BigInt(currentBotStats.messagesSent),
      ),
      reactionsAddedProcessed: String(
        BigInt(stats.reactionsAddedProcessed || "0") +
          BigInt(currentBotStats.reactionsAddedProcessed),
      ),
      reactionsRemovedProcessed: String(
        BigInt(stats.reactionsRemovedProcessed || "0") +
          BigInt(currentBotStats.reactionsRemovedProcessed),
      ),
      commandsRan: String(
        BigInt(stats.commandsRan || "0") +
          BigInt(currentBotStats.commandsRan),
      ),
    });
  },
});
