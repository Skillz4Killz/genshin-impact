// TODO 

import { botCache } from "../../cache.ts";
botCache.eventHandlers.messageUpdate = async function (message) {
    botCache.stats.messagesEdited += 1;
}

botCache.eventHandlers.messageDelete = async function (partial, message) {
    botCache.stats.messagesDeleted += 1;
}
