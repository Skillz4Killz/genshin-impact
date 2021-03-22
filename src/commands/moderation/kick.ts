import {
  botCache,
  botID,
  higherRolePosition,
  highestRole,
  kick,
  sendDirectMessage,
} from "../../../deps.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "kick",
  aliases: ["k"],
  botServerPermissions: ["KICK_MEMBERS"],
  userServerPermissions: ["KICK_MEMBERS"],
  arguments: [
    { name: "member", type: "member", required: false },
    { name: "reason", type: "...string", required: false },
  ],
  guildOnly: true,
  execute: async function (message, args, guild) {
    if (!guild) return;

    const botsHighestRole = await highestRole(message.guildID, botID);
    const membersHighestRole = await highestRole(
      message.guildID,
      args.member.id,
    );
    const modsHighestRole = await highestRole(
      message.guildID,
      message.author.id,
    );

    if (
      !botsHighestRole ||
      !membersHighestRole ||
      !(await higherRolePosition(
        message.guildID,
        botsHighestRole.id,
        membersHighestRole.id,
      ))
    ) {
      return message.reply("❌ My role is not high enough to do that!");
    }

    if (
      !modsHighestRole ||
      !membersHighestRole ||
      !(await higherRolePosition(
        message.guildID,
        modsHighestRole.id,
        membersHighestRole.id,
      ))
    ) {
      return message.reply("❌ Your role is not high enough to do that!");
    }

    const REASON = args.reason ||
      (message.guildID, "NO REASON");
    await sendDirectMessage(
      args.member.id,
      `**__You have been kicked__\nServer:** *${guild.name}*\n**Moderator:** *${message.author.username}*\n**Reason:** *${REASON}*`,
    ).catch(console.log);

    await kick(message.guildID, args.member.id);

    botCache.helpers.createModlog(message, {
      action: "kick",
      reason: REASON,
      member: args.member,
      userID: args.member.id,
    });

    return message.reply("✅ User successfully kicked!");
  },
});
