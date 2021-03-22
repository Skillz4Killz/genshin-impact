import {
  botCache,
  botID,
  editMember,
  higherRolePosition,
  highestRole,
} from "../../../deps.ts";
import { createCommand } from "../../utils/helpers.ts";

createCommand({
  name: "nick",
  aliases: ["nickname"],
  botServerPermissions: ["CHANGE_NICKNAME"],
  userServerPermissions: ["CHANGE_NICKNAME"],
  arguments: [
    { name: "member", type: "member", required: false },
    { name: "userID", type: "snowflake", required: false },
    { name: "nick", type: "...string" },
  ],
  guildOnly: true,
  execute: async function (message, args, guild) {
    if (!guild) return;

    // IF A MEMBER IS PROVIDED MUST BE MOD/ADMIN
    if (args.member || args.userID) {
    } // IF NEITHER WAS PROVIDED, EDITING SELF
    else {
      args.member = message.member;
    }

    if (args.member) {
      if (args.member.id === guild.ownerID) {
        return message.reply("❌ Nickname of the serverowner can't be changed.");
      }

      const botsHighestRole = await highestRole(message.guildID, botID);
      const membersHighestRole = await highestRole(
        message.guildID,
        args.member.id,
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

      // IF NOT EDITING SELF MAKE SURE USER IS HIGHER
      if (message.author.id !== args.member.id) {
        const modsHighestRole = await highestRole(
          message.guildID,
          message.author.id,
        );
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
      }
    } else if (!args.userID) return message.reply("❌ Invalid user ID.");

    const userID = args.member?.id || args.userID!;
    if (userID === guild.ownerID) {
      return message.reply("❌ Nickname of the serverowner can't be changed.");
    }

    await editMember(message.guildID, userID, { nick: args.nick })
      .then(async () => await message.reply("✅ Nickname successfully changed!"))
      .catch((error) => {
        console.log(error);
      });
  },
});
