import {
  botCache,
  botID,
  higherRolePosition,
  highestRole,
} from "../../../deps.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "note",
  botServerPermissions: ["KICK_MEMBERS"],
  userServerPermissions: ["KICK_MEMBERS"],
  arguments: [
    { name: "member", type: "member", required: false },
    { name: "reason", type: "...string" },
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
      if (!args.member) {
        return message.reply("❌ note error line 58");
      }
    }

    botCache.helpers.createModlog(message, {
      action: "note",
      reason: args.reason,
      member: args.member,
      userID: args.member.id,
    });

    return message.reply("✅ Note successfully created!");
  },
});
