import { botCache } from "../../deps.ts";
import { db } from "../database/database.ts";

botCache.eventHandlers.inviteCreate = async function (data) {
  await db.serverinvites.create(`${data.code}_${data.guildID}`, {
    code: data.code,
    uses: data.uses,
    guildID: data.guildID,
    memberID: data.inviter?.id,
    channelID: data.channelID,
  });
};
