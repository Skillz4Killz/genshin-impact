import { botCache } from "../../deps.ts";
import { processReactionCollectors } from "../utils/collectors.ts";

botCache.eventHandlers.reactionRemove = function (message, emoji, userID) {
  // Process reaction collectors.
  botCache.stats.reactionsRemovedProcessed += 1;
  processReactionCollectors(message, emoji, userID);
};
