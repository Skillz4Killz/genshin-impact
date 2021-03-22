import {
  ban,
  botCache,
  botID,
  higherRolePosition,
  highestRole,
  sendDirectMessage,
} from "../../../deps.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "ban",
  aliases: ["b"],
  botServerPermissions: ["BAN_MEMBERS"],
  userServerPermissions: ["BAN_MEMBERS"],
  arguments: [
    { name: "member", type: "member", required: false },
    { name: "userID", type: "snowflake", required: false },
    { name: "reason", type: "...string", required: false },
  ],
  guildOnly: true,
  execute: async function (message, args, guild) {
    if (!guild) return;

    if (args.member) {
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
    } else {
      if (!args.userID) return message.reply("Invalid user ID");

      const banned = await message.guild?.bans();
      if (banned?.has(args.userID)) {
        return message.reply("❌ User already banned.");
      }
    }

    const userID = args.member?.id || args.userID!;

    const REASON = args.reason ||
      (message.guildID, "NO REASON");
    await sendDirectMessage(
      userID,
      `**__You have been banned__\nServer:** *${guild.name}*\n**Moderator:** *${message.author.username}*\n**Reason:** *${REASON}*`,
    ).catch(console.log);

    await ban(message.guildID, userID, {
      days: 7,
      reason: REASON,
    });

    botCache.helpers.createModlog(message, {
      action: "ban",
      reason: REASON,
      member: args.member,
      userID: userID,
    });

    return message.reply("✅ User successfully banned!");
  },
});
