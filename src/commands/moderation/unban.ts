import { botCache, getBan, sendDirectMessage, unban } from "../../../deps.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "unban",
  botServerPermissions: ["BAN_MEMBERS"],
  userServerPermissions: ["BAN_MEMBERS"],
  arguments: [
    { name: "userID", type: "snowflake" },
    { name: "reason", type: "...string", required: false },
  ],
  guildOnly: true,
  execute: async function (message, args, guild) {
    if (!guild) return message.reply("❌ unban error line 14");

    const banned = await getBan(message.guildID, args.userID);
    if (!banned) return message.reply("❌ User is not banned.");

    await sendDirectMessage(
      args.userID,
      `**__You have been unbanned__\nServer:** *${guild.name}*\n**Moderator:** *${message.author.username}*\n**Reason:** *${args.reason}*`,
    ).catch(console.log);

    unban(message.guildID, args.userID);

    botCache.helpers.createModlog(message, {
      action: "unban",
      reason: args.reason,
      userID: args.userID,
    });

    return message.reply("✅ User successfully unbanned!");
  },
});
