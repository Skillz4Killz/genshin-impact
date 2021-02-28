import { botCache } from "../../cache.ts";
botCache.eventHandlers.messageUpdate = async function (message) {
    botCache.stats.messagesUpdated += 1;
}

botCache.eventHandlers.messageDelete = async function (partial, message) {
    botCache.stats.messagesDeleted += 1;
}
